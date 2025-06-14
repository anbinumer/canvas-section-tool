export default function TestIframe() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f8ff' }}>
      <h1>🧪 Iframe Test Page</h1>
      <p><strong>Current Time:</strong> {new Date().toISOString()}</p>
      <p><strong>Purpose:</strong> Testing iframe embedding from Canvas</p>
      <p><strong>Domain:</strong> canvas-section-tool.vercel.app</p>
      <p><strong>Path:</strong> /test-iframe</p>
      
      <div style={{ 
        backgroundColor: '#e8f5e8', 
        padding: '15px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>✅ If you can see this page, iframe embedding is working!</h3>
        <p>This means the CSP headers are correctly configured.</p>
      </div>

      <div style={{ 
        backgroundColor: '#fff3cd', 
        padding: '15px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>🔍 Debug Information:</h3>
        <p><strong>User Agent:</strong> <span id="userAgent"></span></p>
        <p><strong>Referrer:</strong> <span id="referrer"></span></p>
        <p><strong>In Iframe:</strong> <span id="inIframe"></span></p>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('userAgent').textContent = navigator.userAgent;
          document.getElementById('referrer').textContent = document.referrer || 'None';
          document.getElementById('inIframe').textContent = window.self !== window.top ? 'Yes' : 'No';
        `
      }} />
    </div>
  );
} 