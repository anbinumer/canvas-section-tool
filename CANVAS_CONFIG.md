
# Canvas Beta LTI Configuration

## Developer Key Settings:
- **Key Name**: Canvas Section Management Tool
- **Owner Email**: [Your email]
- **Redirect URIs**: https://canvas-section-tool-enlto010i-moes-projects-9fd66a7e.vercel.app/api/auth/lti/callback
- **Target Link URI**: https://canvas-section-tool-enlto010i-moes-projects-9fd66a7e.vercel.app/lti/launch
- **OpenID Connect Initiation Url**: https://canvas-section-tool-enlto010i-moes-projects-9fd66a7e.vercel.app/api/auth/lti/login
- **Public JWK URL**: https://canvas-section-tool-enlto010i-moes-projects-9fd66a7e.vercel.app/.well-known/jwks.json

## Test URLs:
- **App Home**: https://canvas-section-tool-enlto010i-moes-projects-9fd66a7e.vercel.app
- **LTI Launch**: https://canvas-section-tool-enlto010i-moes-projects-9fd66a7e.vercel.app/lti/launch
- **JWK Endpoint**: https://canvas-section-tool-enlto010i-moes-projects-9fd66a7e.vercel.app/.well-known/jwks.json
- **LTI Config**: https://canvas-section-tool-enlto010i-moes-projects-9fd66a7e.vercel.app/lti-config.json

## Next Steps:
1. Copy the above URLs into Canvas Beta Developer Key
2. Enable the tool in a test course
3. Test the LTI launch
4. Verify the "🚀 Launched from Canvas Beta!" message appears
