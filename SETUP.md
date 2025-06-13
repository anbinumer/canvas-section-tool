# Canvas Section Management Tool - Setup Guide

## Current Status
✅ MVP code is complete and ready
✅ Dependencies are installed
✅ Development server is starting

## Next Steps

### 1. Create Environment Configuration
Create a `.env.local` file in the root directory with:

```env
# Canvas API Configuration
CANVAS_API_URL=https://aculeo.beta.instructure.com
CANVAS_API_KEY=your_canvas_api_key_here

# Database Configuration (Supabase)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# LTI Configuration
LTI_CLIENT_ID=your_lti_client_id_here
LTI_PLATFORM_URL=https://aculeo.beta.instructure.com
LTI_DEPLOYMENT_ID=your_deployment_id_here

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 2. Get Canvas API Key
1. Go to aculeo.beta.instructure.com
2. Navigate to Account → Settings → Approved Integrations
3. Create a new access token
4. Copy the token and add it to your `.env.local` file

### 3. Set up Supabase (Optional for now)
1. Go to https://supabase.com
2. Create a new project
3. Get your project URL and anon key from Settings → API
4. Add them to your `.env.local` file

### 4. Test the Application
1. The dev server should be running at http://localhost:3000
2. Open your browser and navigate to http://localhost:3000
3. You should see the Section Management interface

### 5. Canvas LTI Setup (For Production Testing)

#### Create Developer Key in Canvas:
1. Go to aculeo.beta.instructure.com
2. Navigate to Admin → Developer Keys
3. Click "+ Developer Key" → "+ LTI Key"
4. Fill in the configuration:
   - **Key Name**: Canvas Section Management Tool
   - **Owner Email**: Your email
   - **Redirect URIs**: `https://your-domain.com/api/auth/lti`
   - **Target Link URI**: `https://your-domain.com`
   - **OpenID Connect Initiation Url**: `https://your-domain.com/api/auth/lti`
   - **JWK Method**: Public JWK URL
   - **Public JWK URL**: `https://your-domain.com/api/jwks`

#### Configure Tool Placement:
- **Placement**: Course Navigation
- **Target Link URI**: `https://your-domain.com`
- **Text**: "Section Management"
- **Icon URL**: (Optional)

### 6. Deploy to Vercel (For Canvas Integration)
1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy the application
4. Update Canvas Developer Key with your Vercel URL

## Testing Features

The MVP includes:
- ✅ Section creation and management
- ✅ Student assignment to sections
- ✅ Section capacity management
- ✅ Student visibility controls
- ✅ Display name management
- ✅ Basic LTI integration structure

## Troubleshooting

### If the app doesn't start:
- Check that all dependencies are installed: `npm install`
- Verify Node.js version (18+): `node --version`
- Check for any error messages in the terminal

### If Canvas integration fails:
- Verify your Canvas API key is correct
- Check that the Canvas instance URL is correct
- Ensure your app is deployed and accessible from Canvas

### For development issues:
- Check the browser console for JavaScript errors
- Verify the API routes are working by visiting them directly
- Use the Network tab to debug API calls

## What's Working Right Now

1. **Frontend Interface**: Complete section and student management UI
2. **API Structure**: All necessary API endpoints are implemented
3. **Mock Data**: Sample sections and students for testing
4. **Responsive Design**: Works on desktop and tablet
5. **Error Handling**: Basic error states and loading indicators

## Next Development Steps

1. Replace mock data with real Canvas API calls
2. Implement proper LTI 1.3 authentication
3. Add automated student allocation algorithm
4. Implement census date functionality
5. Add audit trail and logging
6. Set up database integration with Supabase 