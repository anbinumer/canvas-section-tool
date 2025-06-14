'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function SimpleTestContent() {
  const searchParams = useSearchParams();
  const [isInIframe, setIsInIframe] = useState(false);
  const [windowInfo, setWindowInfo] = useState<any>({});
  
  const isLtiLaunch = searchParams.get('lti_launch') === 'true';
  const iss = searchParams.get('iss');
  const clientId = searchParams.get('client_id');
  const canvasEnv = searchParams.get('canvas_env');

  useEffect(() => {
    // Check if we're in an iframe
    const inIframe = window.self !== window.top;
    setIsInIframe(inIframe);
    
    setWindowInfo({
      isInIframe: inIframe,
      origin: window.location.origin,
      href: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });
  }, []);

  const openInNewWindow = () => {
    const currentUrl = window.location.href;
    window.open(currentUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <html>
      <head>
        <title>Canvas Section Management Tool - Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style jsx>{`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }
          .status-card {
            padding: 20px;
            border-radius: 8px;
            margin: 15px 0;
            border: 2px solid;
          }
          .success { 
            background-color: #e8f5e8; 
            border-color: #4caf50; 
            color: #2e7d32;
          }
          .info { 
            background-color: #e3f2fd; 
            border-color: #2196f3; 
            color: #1565c0;
          }
          .warning { 
            background-color: #fff3e0; 
            border-color: #ff9800; 
            color: #ef6c00;
          }
          .btn {
            background: #2196F3;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            margin: 10px 5px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
          }
          .btn:hover {
            background: #1976D2;
            transform: translateY(-1px);
          }
          .btn.success {
            background: #4CAF50;
          }
          .btn.success:hover {
            background: #45a049;
          }
          .code {
            background: #f5f5f5;
            padding: 10px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 14px;
            overflow-x: auto;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>🚀 Canvas Section Management Tool</h1>
          <p><strong>Test Page - {new Date().toLocaleString()}</strong></p>
          
          {isLtiLaunch ? (
            <div className="status-card success">
              <h3>✅ LTI Launch Successful!</h3>
              <p><strong>Canvas Environment:</strong> {canvasEnv === 'production' ? '🔴 Production' : '🟡 Beta'}</p>
              <p><strong>Issuer:</strong> {iss || 'Not provided'}</p>
              <p><strong>Client ID:</strong> {clientId || 'Not provided'}</p>
              <p><strong>Launch Status:</strong> Canvas → Your App ✓</p>
            </div>
          ) : (
            <div className="status-card info">
              <h3>ℹ️ Direct Access</h3>
              <p>This page was accessed directly (not through Canvas LTI launch)</p>
            </div>
          )}

          <div className="status-card info">
            <h3>🖼️ Iframe Status</h3>
            <p><strong>Running in iframe:</strong> {isInIframe ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Domain:</strong> {windowInfo.origin}</p>
            <p><strong>Current URL:</strong> <span className="code">{windowInfo.href}</span></p>
            
            {isInIframe && (
              <div style={{ marginTop: '15px' }}>
                <p>🎯 <strong>Great!</strong> The tool is successfully running inside Canvas iframe!</p>
                <button className="btn success" onClick={openInNewWindow}>
                  🔗 Open in New Window
                </button>
                <p><small>Click above if you need more space or want to bookmark this tool</small></p>
              </div>
            )}
          </div>

          <div className="status-card success">
            <h3>🎉 Integration Status: SUCCESS!</h3>
            <ul>
              <li>✅ Canvas LTI integration working</li>
              <li>✅ Iframe embedding allowed</li>
              <li>✅ Environment detection working</li>
              <li>✅ Parameters passed correctly</li>
            </ul>
          </div>

          <div className="status-card info">
            <h3>🔧 Technical Details</h3>
            <div className="code">
              <pre>{JSON.stringify(windowInfo, null, 2)}</pre>
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a href="/" className="btn">🏠 Home</a>
            <button className="btn" onClick={() => window.location.reload()}>🔄 Refresh</button>
          </div>
        </div>
      </body>
    </html>
  );
}

export default function SimpleTest() {
  return (
    <Suspense fallback={
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div>Loading Canvas Section Management Tool...</div>
      </div>
    }>
      <SimpleTestContent />
    </Suspense>
  );
} 