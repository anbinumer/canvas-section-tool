import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();
    
    // Extract LTI 1.3 login parameters
    const iss = body.get('iss') as string;
    const login_hint = body.get('login_hint') as string;
    const target_link_uri = body.get('target_link_uri') as string;
    const lti_message_hint = body.get('lti_message_hint') as string;
    const client_id = body.get('client_id') as string;
    
    console.log('LTI Login Request:', {
      iss,
      login_hint,
      target_link_uri,
      lti_message_hint,
      client_id
    });

    // Generate state and nonce for security
    const state = generateRandomString(32);
    const nonce = generateRandomString(32);
    
    // Store state and nonce (in production, use proper session storage)
    // For now, we'll pass them in the redirect
    
    // Build OIDC authorization URL
    const authUrl = new URL('/api/lti/authorize', iss);
    authUrl.searchParams.set('response_type', 'id_token');
    authUrl.searchParams.set('client_id', client_id || '226430000000000270');
    authUrl.searchParams.set('redirect_uri', `${process.env.VERCEL_URL || 'https://canvas-section-tool.vercel.app'}/api/auth/lti/callback`);
    authUrl.searchParams.set('login_hint', login_hint);
    authUrl.searchParams.set('lti_message_hint', lti_message_hint || '');
    authUrl.searchParams.set('state', state);
    authUrl.searchParams.set('response_mode', 'form_post');
    authUrl.searchParams.set('nonce', nonce);
    authUrl.searchParams.set('scope', 'openid');
    
    console.log('Redirecting to Canvas OIDC:', authUrl.toString());
    
    // Redirect to Canvas OIDC authorization endpoint
    return NextResponse.redirect(authUrl.toString());
    
  } catch (error) {
    console.error('LTI Login Error:', error);
    return NextResponse.json({ 
      error: 'Invalid LTI login request',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  // Handle GET requests (some LTI platforms use GET for login)
  const url = new URL(request.url);
  const iss = url.searchParams.get('iss');
  const login_hint = url.searchParams.get('login_hint');
  const target_link_uri = url.searchParams.get('target_link_uri');
  const lti_message_hint = url.searchParams.get('lti_message_hint');
  const client_id = url.searchParams.get('client_id');
  
  console.log('LTI Login GET Request:', {
    iss,
    login_hint,
    target_link_uri,
    lti_message_hint,
    client_id
  });
  
  // For simplicity in testing, redirect directly to launch with mock data
  const launchUrl = new URL('/lti/launch', request.url);
  launchUrl.searchParams.set('lti_message_hint', lti_message_hint || 'test');
  launchUrl.searchParams.set('state', 'mock_state');
  
  return NextResponse.redirect(launchUrl.toString());
}

function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
} 