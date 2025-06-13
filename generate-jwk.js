const crypto = require('crypto');
const fs = require('fs');

// Generate RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

// Extract the modulus and exponent from the public key
const publicKeyObj = crypto.createPublicKey(publicKey);
const publicKeyJwk = publicKeyObj.export({ format: 'jwk' });

// Create JWK Set
const jwks = {
  keys: [{
    kty: 'RSA',
    use: 'sig',
    kid: 'canvas-section-tool-key',
    n: publicKeyJwk.n,
    e: publicKeyJwk.e,
    alg: 'RS256'
  }]
};

// Write JWK to file
fs.writeFileSync('public/.well-known/jwks.json', JSON.stringify(jwks, null, 2));

// Save private key for later use (if needed)
fs.writeFileSync('private-key.pem', privateKey);

console.log('✅ Generated valid JWK and saved to public/.well-known/jwks.json');
console.log('🔑 Private key saved to private-key.pem');
console.log('\nJWK Content:');
console.log(JSON.stringify(jwks, null, 2)); 