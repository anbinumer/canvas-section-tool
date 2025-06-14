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

    // Use production credentials if coming from production Canvas
    const isProduction = iss?.includes('aculeo.instructure.com');
    
    // Simple redirect approach - let Canvas handle the navigation
    const toolUrl = `/simple-test?lti_launch=true&iss=${encodeURIComponent(iss || '')}&client_id=${encodeURIComponent(client_id || '')}&canvas_env=${isProduction ? 'production' : 'beta'}`;
    
    // Instead of trying to break out, just redirect normally
    return NextResponse.redirect(new URL(toolUrl, request.url));
    
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
  
  // Use production credentials if coming from production Canvas
  const isProduction = iss?.includes('aculeo.instructure.com');
  
  // Simple redirect for GET requests too
  const toolUrl = `/simple-test?lti_launch=true&iss=${encodeURIComponent(iss || '')}&client_id=${encodeURIComponent(client_id || '')}&canvas_env=${isProduction ? 'production' : 'beta'}`;
  
  return NextResponse.redirect(new URL(toolUrl, request.url));
}

function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
} 