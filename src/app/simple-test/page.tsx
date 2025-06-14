export default function SimpleTest() {
  return (
    <html>
      <head>
        <title>Simple Test</title>
      </head>
      <body style={{ margin: 0, padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>🟢 Simple Test Page</h1>
        <p>Current time: {new Date().toISOString()}</p>
        <p>If you can see this in Canvas, iframe embedding works!</p>
        <div style={{ 
          backgroundColor: '#e8f5e8', 
          padding: '15px', 
          border: '1px solid #4caf50',
          borderRadius: '5px',
          marginTop: '20px'
        }}>
          <h3>✅ SUCCESS: Iframe embedding is working!</h3>
          <p>Domain: canvas-section-tool.vercel.app</p>
          <p>Path: /simple-test</p>
        </div>
      </body>
    </html>
  );
} 