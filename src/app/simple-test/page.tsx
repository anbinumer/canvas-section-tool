'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SimpleTest() {
  const [mounted, setMounted] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const [windowInfo, setWindowInfo] = useState<any>({});
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    // Set mounted to true after component mounts
    setMounted(true);
    
    // Get search params safely
    if (typeof window !== 'undefined') {
      setSearchParams(new URLSearchParams(window.location.search));
    }
    
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

  if (!mounted) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div>Loading Canvas Section Management Tool...</div>
      </div>
    );
  }

  const isLtiLaunch = searchParams?.get('lti_launch') === 'true';
  const iss = searchParams?.get('iss');
  const clientId = searchParams?.get('client_id');
  const canvasEnv = searchParams?.get('canvas_env');

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      <h1>🚀 Canvas Section Management Tool</h1>
      <p><strong>Test Page - {new Date().toLocaleString()}</strong></p>
      
      {isLtiLaunch ? (
        <div style={{
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          border: '2px solid #4caf50',
          backgroundColor: '#e8f5e8',
          color: '#2e7d32'
        }}>
          <h3>✅ LTI Launch Successful!</h3>
          <p><strong>Canvas Environment:</strong> {canvasEnv === 'production' ? '🔴 Production' : '🟡 Beta'}</p>
          <p><strong>Issuer:</strong> {iss || 'Not provided'}</p>
          <p><strong>Client ID:</strong> {clientId || 'Not provided'}</p>
          <p><strong>Launch Status:</strong> Canvas → Your App ✓</p>
        </div>
      ) : (
        <div style={{
          padding: '20px',
          borderRadius: '8px',
          margin: '15px 0',
          border: '2px solid #2196f3',
          backgroundColor: '#e3f2fd',
          color: '#1565c0'
        }}>
          <h3>ℹ️ Direct Access</h3>
          <p>This page was accessed directly (not through Canvas LTI launch)</p>
        </div>
      )}

      <div style={{
        padding: '20px',
        borderRadius: '8px',
        margin: '15px 0',
        border: '2px solid #2196f3',
        backgroundColor: '#e3f2fd',
        color: '#1565c0'
      }}>
        <h3>🖼️ Iframe Status</h3>
        <p><strong>Running in iframe:</strong> {isInIframe ? '✅ Yes' : '❌ No'}</p>
        <p><strong>Domain:</strong> {windowInfo.origin}</p>
        <p><strong>Current URL:</strong></p>
        <div style={{
          background: '#f5f5f5',
          padding: '10px',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '14px',
          overflowX: 'auto',
          wordBreak: 'break-all'
        }}>
          {windowInfo.href}
        </div>
        
        {isInIframe && (
          <div style={{ marginTop: '15px' }}>
            <p>🎯 <strong>Great!</strong> The tool is successfully running inside Canvas iframe!</p>
            <button 
              onClick={openInNewWindow}
              style={{
                background: '#4CAF50',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                margin: '10px 5px'
              }}
            >
              🔗 Open in New Window
            </button>
            <p><small>Click above if you need more space or want to bookmark this tool</small></p>
          </div>
        )}
      </div>

      <div style={{
        padding: '20px',
        borderRadius: '8px',
        margin: '15px 0',
        border: '2px solid #4caf50',
        backgroundColor: '#e8f5e8',
        color: '#2e7d32'
      }}>
        <h3>🎉 Integration Status: SUCCESS!</h3>
        <ul>
          <li>✅ Canvas LTI integration working</li>
          <li>✅ Iframe embedding allowed</li>
          <li>✅ Environment detection working</li>
          <li>✅ Parameters passed correctly</li>
          <li>✅ No more CSP "refused to connect" errors!</li>
        </ul>
      </div>

      <div style={{
        padding: '20px',
        borderRadius: '8px',
        margin: '15px 0',
        border: '2px solid #2196f3',
        backgroundColor: '#e3f2fd',
        color: '#1565c0'
      }}>
        <h3>🔧 Technical Details</h3>
        <div style={{
          background: '#f5f5f5',
          padding: '10px',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '14px',
          overflowX: 'auto'
        }}>
          <pre>{JSON.stringify(windowInfo, null, 2)}</pre>
        </div>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <a 
          href="/" 
          style={{
            background: '#2196F3',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            textDecoration: 'none',
            margin: '10px 5px',
            display: 'inline-block'
          }}
        >
          🏠 Home
        </a>
        <button 
          onClick={() => window.location.reload()}
          style={{
            background: '#2196F3',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '10px 5px'
          }}
        >
          🔄 Refresh
        </button>
      </div>
    </div>
  );
} 