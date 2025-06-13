import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();
    
    // Extract OIDC response parameters
    const id_token = body.get('id_token') as string;
    const state = body.get('state') as string;
    const error = body.get('error') as string;
    
    console.log('LTI Callback received:', {
      has_id_token: !!id_token,
      state: state,
      error: error
    });

    if (error) {
      console.error('LTI Authentication Error:', error);
      return NextResponse.redirect(
        new URL(`/lti/launch?error=${encodeURIComponent(error)}`, request.url)
      );
    }

    if (!id_token) {
      console.error('No ID token received');
      return NextResponse.redirect(
        new URL('/lti/launch?error=no_id_token', request.url)
      );
    }

    // In a full implementation, you would:
    // 1. Validate the JWT signature using Canvas's public key
    // 2. Verify the token claims (aud, iss, exp, etc.)
    // 3. Extract LTI context from the token
    
    // For MVP testing, redirect to launch with success indicators
    const launchUrl = new URL('/lti/launch', request.url);
    launchUrl.searchParams.set('lti_authenticated', 'true');
    launchUrl.searchParams.set('state', state);
    
    console.log('Redirecting to launch:', launchUrl.toString());
    
    return NextResponse.redirect(launchUrl.toString());
    
  } catch (error) {
    console.error('LTI Callback Error:', error);
    return NextResponse.redirect(
      new URL(`/lti/launch?error=${encodeURIComponent('callback_error')}`, request.url)
    );
  }
}

export async function GET(request: NextRequest) {
  // Handle GET callback (some configurations might use GET)
  const url = new URL(request.url);
  const id_token = url.searchParams.get('id_token');
  const state = url.searchParams.get('state');
  const error = url.searchParams.get('error');
  
  console.log('LTI Callback GET received:', {
    has_id_token: !!id_token,
    state: state,
    error: error
  });
  
  if (error) {
    return NextResponse.redirect(
      new URL(`/lti/launch?error=${encodeURIComponent(error)}`, request.url)
    );
  }
  
  const launchUrl = new URL('/lti/launch', request.url);
  launchUrl.searchParams.set('lti_authenticated', 'true');
  if (state) launchUrl.searchParams.set('state', state);
  
  return NextResponse.redirect(launchUrl.toString());
} 