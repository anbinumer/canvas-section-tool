# Canvas Section Tool - Deployment Guide

## Step 1: Deploy to Vercel

### Option A: Command Line (Current)
```bash
npx vercel --prod
```
Follow prompts:
- Set up and deploy? **Y**
- Which scope? **[Your account]**
- Link to existing project? **N**
- Project name? **canvas-section-tool** (or press Enter)
- Directory? **Press Enter**
- Override settings? **N**

### Option B: GitHub + Vercel Web
1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Deploy automatically

## Step 2: Update Configuration

After deployment, you'll get a URL like: `https://canvas-section-tool-xxx.vercel.app`

Update these files with your actual domain:

### Update `public/lti-config.json`
Replace `your-domain-here.vercel.app` with your actual Vercel URL

### Update Environment Variables
In Vercel dashboard, add:
- `CANVAS_API_URL=https://aculeo.beta.instructure.com`
- `CANVAS_API_TOKEN=[Your Canvas API Token]`
- `LTI_CLIENT_ID=[Generated by Canvas]`
- `LTI_DEPLOYMENT_ID=[Generated by Canvas]`

## Step 3: Canvas Beta Configuration

### 3.1 Register LTI Tool in Canvas Beta
1. Go to Canvas Beta Admin → Developer Keys
2. Click **+ Developer Key** → **+ LTI Key**
3. Fill in:
   - **Key Name**: Canvas Section Management Tool
   - **Owner Email**: [Your email]
   - **Redirect URIs**: `https://your-vercel-url.vercel.app/api/auth/lti/callback`
   - **Method**: Manual Entry
   - **Title**: Canvas Section Management Tool
   - **Target Link URI**: `https://your-vercel-url.vercel.app/lti/launch`
   - **OpenID Connect Initiation Url**: `https://your-vercel-url.vercel.app/api/auth/lti/login`
   - **JWK Method**: Public JWK URL
   - **Public JWK URL**: `https://your-vercel-url.vercel.app/.well-known/jwks.json`

### 3.2 Configure Placements
Add these placements:
- **Course Navigation**: For course-level access
- **Account Navigation**: For admin-level access

### 3.3 Set Scopes
Enable these scopes:
- `https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly`
- `https://canvas.instructure.com/lti/account_lookup/scope/show`

## Step 4: Test Integration

### 4.1 Enable the Tool
1. In Canvas Beta, go to the course where you want to test
2. Settings → Navigation
3. Find "Section Management Tool" and enable it

### 4.2 Test Launch
1. Click on the tool in course navigation
2. Should redirect to your deployed app
3. Look for "🚀 Launched from Canvas Beta!" message

## Step 5: Verify Functionality

✅ **Expected Results:**
- Tool appears in Canvas navigation
- Clicking launches your deployed app
- App displays "LTI Launch Successful" message
- Sections are displayed correctly
- No JavaScript errors in browser console

## Troubleshooting

### Common Issues:
1. **404 on launch**: Check Target Link URI matches your deployment
2. **CORS errors**: Ensure proper domain configuration
3. **Authentication failed**: Verify JWK URL is accessible
4. **Tool not appearing**: Check placement configuration

### Debug URLs:
- **JWK Endpoint**: `https://your-vercel-url.vercel.app/.well-known/jwks.json`
- **LTI Config**: `https://your-vercel-url.vercel.app/lti-config.json`
- **Launch URL**: `https://your-vercel-url.vercel.app/lti/launch`

## Next Steps After Successful Deployment

1. **Test LTI Integration**: Verify tool launches from Canvas
2. **Add Real Canvas API Integration**: Connect to actual Canvas data
3. **Implement Interactive Features**: Restore React components
4. **Add Section Management Logic**: Create/edit/delete functionality
5. **User Testing**: Get feedback from Canvas admins

---

**Need Help?**
- Check Vercel deployment logs
- Verify Canvas Developer Key configuration
- Test JWK endpoint accessibility
- Review Canvas LTI documentation 