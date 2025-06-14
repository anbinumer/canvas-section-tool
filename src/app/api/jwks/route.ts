import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { createPublicKey } from 'crypto';

export async function GET() {
  try {
    // Read the private key file
    const privateKeyPath = path.join(process.cwd(), 'private-key.pem');
    const privateKeyPem = fs.readFileSync(privateKeyPath, 'utf8');
    
    // Create public key from private key
    const publicKey = createPublicKey(privateKeyPem);
    
    // Export as JWK
    const jwk = publicKey.export({ format: 'jwk' });
    
    // Add required fields for LTI
    const jwks = {
      keys: [
        {
          ...jwk,
          kid: 'canvas-section-tool-key',
          alg: 'RS256',
          use: 'sig'
        }
      ]
    };

    return NextResponse.json(jwks, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating JWKS:', error);
    return NextResponse.json(
      { error: 'Failed to generate JWKS' },
      { status: 500 }
    );
  }
} 