#!/usr/bin/env node

// Helper script to update LTI configuration with actual deployment URL
// Usage: node update-config.js https://your-vercel-url.vercel.app

const fs = require('fs');
const path = require('path');

const deploymentUrl = process.argv[2];

if (!deploymentUrl) {
  console.error('❌ Please provide your Vercel deployment URL');
  console.log('Usage: node update-config.js https://your-vercel-url.vercel.app');
  process.exit(1);
}

console.log(`🔧 Updating configuration for: ${deploymentUrl}`);

// Update LTI config
const ltiConfigPath = path.join(__dirname, 'public', 'lti-config.json');
const ltiConfig = JSON.parse(fs.readFileSync(ltiConfigPath, 'utf8'));

// Replace placeholder URLs
const configStr = JSON.stringify(ltiConfig, null, 2)
  .replace(/your-domain-here\.vercel\.app/g, deploymentUrl.replace('https://', ''));

fs.writeFileSync(ltiConfigPath, configStr);

console.log('✅ Updated public/lti-config.json');

// Create Canvas configuration summary
const canvasConfig = `
# Canvas Beta LTI Configuration

## Developer Key Settings:
- **Key Name**: Canvas Section Management Tool
- **Owner Email**: [Your email]
- **Redirect URIs**: ${deploymentUrl}/api/auth/lti/callback
- **Target Link URI**: ${deploymentUrl}/lti/launch
- **OpenID Connect Initiation Url**: ${deploymentUrl}/api/auth/lti/login
- **Public JWK URL**: ${deploymentUrl}/.well-known/jwks.json

## Test URLs:
- **App Home**: ${deploymentUrl}
- **LTI Launch**: ${deploymentUrl}/lti/launch
- **JWK Endpoint**: ${deploymentUrl}/.well-known/jwks.json
- **LTI Config**: ${deploymentUrl}/lti-config.json

## Next Steps:
1. Copy the above URLs into Canvas Beta Developer Key
2. Enable the tool in a test course
3. Test the LTI launch
4. Verify the "🚀 Launched from Canvas Beta!" message appears
`;

fs.writeFileSync('CANVAS_CONFIG.md', canvasConfig);
console.log('✅ Created CANVAS_CONFIG.md with Canvas setup instructions');

console.log('\n🎉 Configuration updated successfully!');
console.log('📋 Check CANVAS_CONFIG.md for Canvas Beta setup instructions'); 