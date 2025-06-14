#!/bin/bash

echo "Setting up Vercel environment variables for Canvas LTI..."

# Set Canvas Client ID
echo "226430000000000270" | npx vercel env add CANVAS_CLIENT_ID production

# Set Canvas Client Secret
echo "AW8PLTh9tTB9uMC2x74ke22ymwJ89Pc8EN47DRfr38AykawwBWymCT4wWkVrPM3r" | npx vercel env add CANVAS_CLIENT_SECRET production

# Set Canvas Platform URL
echo "https://aculeo.beta.instructure.com" | npx vercel env add CANVAS_PLATFORM_URL production

# Set Application URL
echo "https://canvas-section-tool.vercel.app" | npx vercel env add NEXTAUTH_URL production

echo "Environment variables set up! Now redeploy your application:"
echo "npx vercel --prod" 