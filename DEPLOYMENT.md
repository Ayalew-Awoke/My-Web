# Deployment Guide for Ayalew's Portfolio Website

Your portfolio website is built and ready for deployment! The production files are in the `dist/` folder.

## Quick Deployment Options (Free)

### Option 1: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `dist` folder into the Netlify dashboard
3. Your site will be live instantly with a free URL like `your-site.netlify.app`

### Option 2: Vercel (Recommended for React)
1. Go to [vercel.com](https://vercel.com) and sign up
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel` in your project folder
4. Follow the prompts - your site will be live in seconds

### Option 3: GitHub Pages (Free with GitHub)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch and `dist` folder as source
4. Your site will be at `yourusername.github.io/repository-name`

### Option 4: Cloudflare Pages
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

## Manual Deployment Steps

### For Traditional Web Hosting
1. Upload all files from the `dist/` folder to your web server
2. Ensure your server supports static files
3. The `index.html` should be your default page

### For Local Testing
```bash
# Preview the production build
npx vite preview
```

## Optional: Add Real Email Service

To make the contact form send emails directly (instead of opening email client):

1. Go to [web3forms.com](https://web3forms.com)
2. Sign up for free account
3. Create a form and get your Access Key
4. Create `.env` file in project root:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
5. Rebuild: `npm run build`
6. Redeploy

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form opens email client
- [ ] Check images load correctly
- [ ] Test on mobile devices
- [ ] Verify CV download works
- [ ] Check project modals function properly

## Custom Domain Setup

Once deployed, you can add a custom domain:
- **Netlify**: Domain settings → Add custom domain
- **Vercel**: Project settings → Domains
- **GitHub Pages**: Repository Settings → Pages → Custom domain

## Performance Tips

Your site is already optimized with:
- Minified CSS and JS
- Image optimization
- Fast loading times
- Responsive design

No additional optimization needed!

## Support

If you encounter issues:
- Check browser console for errors
- Ensure all files from `dist/` are uploaded
- Verify file paths are correct
- Test with different browsers

Your portfolio is ready to impress! 🚀
