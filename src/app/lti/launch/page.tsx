'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface LTIContext {
  user?: any;
  course?: any;
  platform?: any;
  isAuthenticated: boolean;
}

export default function LTILaunch() {
  const [ltiContext, setLtiContext] = useState<LTIContext>({ isAuthenticated: false });
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for LTI parameters
    const hasLtiParams = searchParams?.has('lti_message_hint') || 
                        searchParams?.has('id_token') || 
                        searchParams?.has('state');
    
    // Simulate LTI context for now (in real implementation, this would come from LTI authentication)
    const mockLtiContext = {
      user: {
        id: '12345',
        name: 'Test User',
        email: 'user@acu.edu.au',
        roles: ['Instructor']
      },
      course: {
        id: '26038',
        name: 'SWTP631 FIELD PRACTICUM 2',
        label: 'SWTP631'
      },
      platform: {
        name: 'Canvas Beta',
        version: '1.3',
        url: 'aculeo.beta.instructure.com'
      },
      isAuthenticated: hasLtiParams
    };

    setLtiContext(mockLtiContext);
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div style={{ 
        padding: '40px', 
        backgroundColor: '#ffffff', 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div>Loading Canvas integration...</div>
      </div>
    );
  }

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
          🚀 {ltiContext.isAuthenticated ? 'Launched from Canvas Beta!' : 'Direct Access'} LTI Integration {ltiContext.isAuthenticated ? 'Active' : 'Testing'}
        </p>
      </div>

      {ltiContext.isAuthenticated ? (
        <div style={{
          backgroundColor: '#e8f5e8',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #c3e6c3',
          marginBottom: '30px'
        }}>
          <h3 style={{ 
            color: '#2d5a2d',
            margin: '0 0 15px 0'
          }}>
            ✅ LTI Launch Successful
          </h3>
          <div style={{ color: '#2d5a2d' }}>
            <p><strong>User:</strong> {ltiContext.user?.name} ({ltiContext.user?.email})</p>
            <p><strong>Course:</strong> {ltiContext.course?.name}</p>
            <p><strong>Platform:</strong> {ltiContext.platform?.name}</p>
            <p><strong>Roles:</strong> {ltiContext.user?.roles?.join(', ')}</p>
          </div>
        </div>
      ) : (
        <div style={{
          backgroundColor: '#fff3cd',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #ffeaa7',
          marginBottom: '30px'
        }}>
          <h3 style={{ 
            color: '#856404',
            margin: '0 0 10px 0'
          }}>
            ⚠️ Direct Access Mode
          </h3>
          <p style={{ 
            color: '#856404',
            margin: '0'
          }}>
            This tool should be launched from within Canvas for full functionality.
          </p>
        </div>
      )}

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          color: '#394B58',
          marginBottom: '20px'
        }}>
          Current Sections {ltiContext.course ? `- ${ltiContext.course.label}` : ''}
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
            Section A - {ltiContext.course?.label || 'Mathematics 101'}
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
            Section B - {ltiContext.course?.label || 'Mathematics 101'}
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
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h3 style={{ 
          color: '#495057',
          margin: '0 0 10px 0'
        }}>
          🔧 Debug Information
        </h3>
        <details style={{ color: '#495057' }}>
          <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>View LTI Context</summary>
          <pre style={{ 
            backgroundColor: '#ffffff', 
            padding: '10px', 
            borderRadius: '4px',
            fontSize: '12px',
            overflow: 'auto'
          }}>
            {JSON.stringify(ltiContext, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
} 