export default function Home() {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        backgroundColor: '#394B58',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          margin: '0 0 10px 0',
          fontWeight: 'bold'
        }}>
          Canvas Section Management Tool
        </h1>
        <p style={{ 
          fontSize: '16px', 
          margin: '0',
          opacity: '0.9'
        }}>
          Server is running successfully! 🎉
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          color: '#394B58',
          marginBottom: '20px'
        }}>
          Current Sections
        </h2>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          margin: '10px 0',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            color: '#394B58',
            margin: '0 0 10px 0'
          }}>
            Section A - Mathematics 101
          </h3>
          <p style={{ 
            color: '#6c757d',
            margin: '0'
          }}>
            📊 1 / 25 students enrolled
          </p>
        </div>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          margin: '10px 0',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            color: '#394B58',
            margin: '0 0 10px 0'
          }}>
            Section B - Mathematics 101
          </h3>
          <p style={{ 
            color: '#6c757d',
            margin: '0'
          }}>
            📊 0 / 25 students enrolled
          </p>
        </div>
      </div>

      <button style={{ 
        backgroundColor: '#394B58', 
        color: 'white', 
        padding: '12px 24px', 
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: '500'
      }}>
        ➕ Create New Section
      </button>

      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#e8f5e8',
        borderRadius: '8px',
        border: '1px solid #c3e6c3'
      }}>
        <h3 style={{ 
          color: '#2d5a2d',
          margin: '0 0 10px 0'
        }}>
          ✅ System Status
        </h3>
        <p style={{ 
          color: '#2d5a2d',
          margin: '0'
        }}>
          Next.js server is running on port 3002<br/>
          Ready for Canvas LTI integration
        </p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Test Links:</h2>
        <ul>
          <li>
            <a href="/lti/launch" style={{ color: 'blue', textDecoration: 'underline' }}>
              Test LTI Launch Page
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 