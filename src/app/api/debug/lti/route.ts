import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();
    
    // Convert FormData to a regular object for logging
    const formData: Record<string, string> = {};
    body.forEach((value, key) => {
      formData[key] = value.toString();
    });
    
    console.log('=== LTI DEBUG - All Form Data ===');
    console.log(JSON.stringify(formData, null, 2));
    console.log('=== END LTI DEBUG ===');
    
    // Also log specific important fields
    console.log('Key LTI Parameters:');
    console.log('- iss (issuer):', formData.iss);
    console.log('- client_id:', formData.client_id);
    console.log('- login_hint:', formData.login_hint);
    console.log('- target_link_uri:', formData.target_link_uri);
    console.log('- lti_message_hint:', formData.lti_message_hint);
    
    return NextResponse.json({
      success: true,
      message: 'Debug data logged to console',
      receivedParams: formData
    });
    
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json({ 
      error: 'Debug endpoint error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const params: Record<string, string> = {};
  
  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  
  console.log('=== LTI DEBUG GET - All URL Params ===');
  console.log(JSON.stringify(params, null, 2));
  console.log('=== END LTI DEBUG GET ===');
  
  return NextResponse.json({
    success: true,
    message: 'Debug GET data logged to console',
    receivedParams: params
  });
} 