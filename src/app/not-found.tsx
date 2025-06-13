'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        color: '#394B58',
        marginBottom: '20px'
      }}>
        404 - Page Not Found
      </h1>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        marginBottom: '20px'
      }}>
        <p style={{ margin: '0 0 10px 0' }}>
          <strong>Attempted URL:</strong> {pathname}
        </p>
        <p style={{ margin: '0' }}>
          <strong>Available Routes:</strong>
        </p>
        <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px' }}>
          <li>/</li>
          <li>/lti-launch</li>
          <li>/api/auth/lti/login</li>
        </ul>
      </div>
      <a 
        href="/"
        style={{
          color: '#394B58',
          textDecoration: 'underline',
          marginTop: '20px'
        }}
      >
        Return to Home
      </a>
    </div>
  );
} 