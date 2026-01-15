# 🚀 AI Portfolio - Complete Documentation

Welcome! Your AI Portfolio is production-ready. This guide covers setup, customization, and deployment.

---

## 📋 Table of Contents

1. [Quick Start (5 minutes)](#quick-start)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Full Deployment Guide](#full-deployment-guide)
4. [Local Development](#local-development)
5. [Customization Guide](#customization-guide)
6. [Deployment Methods](#deployment-methods)
7. [Testing Before Deployment](#testing-before-deployment)
8. [Troubleshooting](#troubleshooting)
9. [Project Structure](#project-structure)
10. [Resources](#resources)

---

## Quick Start

### 🎯 Get your AI Portfolio live in 5 minutes!

### Prerequisites
- GitHub account
- Node.js 18+ (already installed? Run `node --version`)

### 3-Step Deployment

#### Step 1: Push to GitHub
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: AI portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

#### Step 2: Enable GitHub Pages
1. Go to: `https://github.com/YOUR_USERNAME/portfolio/settings/pages`
2. Under "Source", select **GitHub Actions**
3. Wait 1-2 minutes for automatic deployment

#### Step 3: Visit Your Site
🎉 Your portfolio is live at: `https://YOUR_USERNAME.github.io/portfolio`

---

## Pre-Deployment Checklist

Before pushing to GitHub, review these items:

- [ ] **Read this documentation** (5 min read)
- [ ] **Review your contributions** in `src/data/contributions.ts`
- [ ] **Update your links** in `src/app/page.tsx`
- [ ] **Test locally** with `npm run dev`
- [ ] **Check dark mode** works correctly
- [ ] **Test on mobile** using browser DevTools
- [ ] **Have a GitHub account** ready

---

## Full Deployment Guide

### Step 1: Initialize Git Repository

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: AI Portfolio website"
```

### Step 2: Create GitHub Repository

1. Visit [github.com/new](https://github.com/new)
2. Repository name: **`portfolio`** (or your preferred name)
3. Description: "AI-themed portfolio showcasing GitHub contributions"
4. Choose **Public** (important for GitHub Pages)
5. Click **Create repository**

### Step 3: Connect & Push

Copy these commands from your GitHub repository page:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Enable GitHub Pages

1. Go to repository **Settings** (gear icon)
2. Click **Pages** in the left sidebar
3. Under "Source", select **GitHub Actions**
4. GitHub will automatically start deploying

### Step 5: Wait for Deployment

- Check the **Actions** tab in your repository
- Look for the **"Deploy to GitHub Pages"** workflow
- Green checkmark = Success ✅
- Red X = Failed (check logs for errors)

Deployment typically takes 1-2 minutes.

### Step 6: Visit Your Portfolio

Once deployment succeeds, visit:

```
https://YOUR_USERNAME.github.io/portfolio
```

Replace `YOUR_USERNAME` with your GitHub username.

**Congratulations! Your portfolio is live! 🎉**

---

## Local Development

### 🛠️ Running Locally

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in browser

# Make changes and see them live!
```

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export

# Run linting
npm run lint
```

### Build for Production

```bash
npm run build
```

### Export Static Site

```bash
npm run export
```

Files are generated in the `out/` folder.

---

## Customization Guide

### 📝 Update Your Information

#### 1. Edit Contributions

Edit: `src/data/contributions.ts`
- Add/remove contributions
- Update titles, descriptions, links
- Change emojis and tags

```typescript
{
  id: 'my-project-1',
  title: 'My Amazing Project',
  description: 'This is what I built and why it matters',
  type: 'repo',  // or 'pr', 'discussion', 'plugin', 'fr'
  url: 'https://github.com/myusername/myrepo',
  repository: 'myusername/myrepo',
  category: 'AI Projects',
  tags: ['AI', 'JavaScript', 'React'],
  date: '2024-01-14',
  icon: '✨',
}
```

#### 2. Update Your Links

Edit: `src/app/page.tsx`
- Line 72: Update GitHub profile URL
- Line 171: Update GitHub link
- Line 174: Update LinkedIn link

#### 3. Commit and Push

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Your site automatically updates within 1-2 minutes! ✨

### 🎨 Styling Customization

#### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  ai: {
    500: '#0ea5e9',  // Main color
    600: '#0284c7',  // Hover
    700: '#0369a1',  // Active
    // ... other shades
  }
}
```

#### Adjust Spacing

Edit `tailwind.config.ts` → `theme.extend`:

```typescript
spacing: {
  // Add custom spacing values
}
```

### Update Metadata

Edit `src/app/layout.tsx` to update:
- Title and description
- OpenGraph metadata
- Twitter card information

---

## Deployment Methods

### GitHub Pages (Recommended) - Automatic

Push to `main` branch and GitHub Actions automatically builds and deploys:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Check deployment status:
- Repository → Actions tab
- Look for "Deploy to GitHub Pages" workflow

#### Configuration

##### Customize Repository Name

If you named your repository differently (e.g., `my-portfolio`), update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-portfolio",  // ← Change this
  images: {
    unoptimized: true,
  },
};
```

Then rebuild:

```bash
npm run build
git add .
git commit -m "Update basePath for custom repository name"
git push
```

##### Custom Domain

If you want to use a custom domain (e.g., `yourname.com`):

1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Configure your domain's DNS settings to point to GitHub Pages
4. Remove the `basePath` from `next.config.ts` if using a custom domain

Edit `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  // Remove or comment out basePath for custom domains
  // basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};
```

### Vercel - Easy Alternative

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify - Drag & Drop

1. Build locally: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `out` folder

---

## Testing Before Deployment

### Local Testing

```bash
# Development mode
npm run dev
# Open http://localhost:3000

# Production build
npm run build

# Verify static export
ls out/  # Should contain HTML files
```

### Test Dark Mode

- Click the moon/sun icon in the header
- Verify theme persists on page reload

### Test Mobile Responsiveness

- Browser DevTools (F12) → Toggle device toolbar
- Test on iPhone/Android sizes
- Verify cards stack properly

---

## Troubleshooting

### 📊 Deployment Status

To check if your site is deployed:

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Look for "Deploy to GitHub Pages" workflow
4. Green checkmark ✓ = Successful deployment
5. Red × = Deployment failed (check logs)

### Issue: Site shows 404

**Cause**: Page not found when accessing the site

**Solution**:
1. Check if `basePath` in `next.config.ts` matches your repository name
2. Verify GitHub Pages is enabled in repository Settings
3. Wait 2-3 minutes for deployment to complete
4. Make sure you enabled GitHub Actions as the source

### Issue: Styles look broken

**Cause**: Site looks broken/unstyled

**Solution**:
1. Verify `basePath` is correctly set
2. Clear browser cache (Ctrl+Shift+Delete)
3. Close and reopen the browser
4. Try a different browser
5. Check browser console for CSS load errors

### Issue: Dark mode/theme toggle isn't working

**Cause**: Theme toggle button or dark mode feature not responding

**Solution**:
1. It's a client-side feature - won't work on first load
2. Try refreshing the page
3. Open browser DevTools (F12)
4. Check Console tab for JavaScript errors
5. Try clearing localStorage: `localStorage.clear()`

### Issue: Build fails

**Cause**: GitHub Actions workflow fails

**Solution**:
1. Go to Actions tab → see failed workflow
2. Click on workflow → expand "Build and deploy" step
3. Check error logs
4. Common fixes:
   - Ensure no TypeScript errors: `npm run build` locally
   - Check Node.js version compatibility
   - Verify all imports are correct
5. Try local build: `npm run build`
6. Fix any TypeScript errors
7. Push again

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Main portfolio page
│   │   ├── layout.tsx        ← Global layout
│   │   └── globals.css       ← Global styles
│   ├── components/
│   │   ├── Header.tsx        ← Navigation header
│   │   └── ContributionCard.tsx ← Individual contribution cards
│   ├── data/
│   │   └── contributions.ts  ← Your GitHub contributions data
│   └── lib/
│       └── ThemeProvider.tsx ← Theme logic
├── .github/workflows/        ← GitHub Actions CI/CD
├── public/                   ← Static files (if needed)
├── package.json              ← Dependencies
└── Configuration files       ← next.config.ts, tailwind.config.ts, etc.
```

---

## 🎨 Features

✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Dark Mode** - Automatic theme management
✅ **AI-Themed** - Gradient cards with animations
✅ **Static Export** - Fast, secure, no server needed
✅ **GitHub Pages** - Free hosting forever
✅ **Automatic Deployment** - Push → Deploy instantly
✅ **SEO Optimized** - Your portfolio shows up in Google
✅ **Social Sharing** - Looks great when shared on Twitter/LinkedIn
✅ **Mobile First** - Designed for phones first, then tablets/desktop

---

## 📚 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GitHub Actions
- next-themes (theme management)
- lucide-react (icons)

---

## 🎓 What You Have

### Features Included
✅ AI-themed gradient design
✅ Responsive mobile-first layout
✅ Dark mode toggle
✅ Featured GitHub contributions
✅ Smooth animations and transitions
✅ SEO optimized
✅ Automatic GitHub Pages deployment

---

## 💡 Tips & Tricks

1. **Use Emojis** - Pick expressive emojis for each contribution
2. **Write Clear Descriptions** - First sentence should be catchy
3. **Organize by Category** - Group similar contributions
4. **Update Regularly** - Add new projects as you build them
5. **Share Links** - Add social media profiles to increase visibility
6. **Dark Mode Works Offline** - Theme preference saved in browser

---

## 🤔 Common Questions

**Q: How often can I update my portfolio?**
A: Whenever you want! Just edit, commit, and push. Updates deploy in 1-2 minutes.

**Q: Can I use a custom domain?**
A: Yes! See the Custom Domain section above.

**Q: Is my data safe?**
A: Yes! No database or external services. Everything is static HTML/CSS/JS.

**Q: Can I change the design?**
A: Absolutely! Edit CSS in `src/app/globals.css` and colors in `tailwind.config.ts`.

**Q: How do I add images?**
A: Place images in `public/` folder and reference them in your contributions.

---

## 📞 Need Help?

1. **Check documentation** - This README has comprehensive info
2. **Review errors** - Check GitHub Actions logs for build errors
3. **Try troubleshooting** - See Troubleshooting section above
4. **Read comments** - Code is well-commented and self-explanatory

---

## 📚 Resources

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Next.js Docs](https://nextjs.org)

---

## 🎯 Quick Customization Guide

### 1. Add a New Contribution (2 minutes)

Edit `src/data/contributions.ts`:

```typescript
{
  id: 'my-project-1',
  title: 'My Amazing Project',
  description: 'This is what I built and why it matters',
  type: 'repo',  // or 'pr', 'discussion', 'plugin', 'fr'
  url: 'https://github.com/myusername/myrepo',
  repository: 'myusername/myrepo',
  category: 'AI Projects',
  tags: ['AI', 'JavaScript', 'React'],
  date: '2024-01-14',
  icon: '✨',
}
```

### 2. Update Your Links (1 minute)

Edit `src/app/page.tsx` and find:
- Line 72: `href="https://github.com"` → Your profile
- Line 171: GitHub link
- Line 174: LinkedIn link

### 3. Change Colors (2 minutes)

Edit `tailwind.config.ts` and modify the `ai` color palette.

### 4. Push Changes (30 seconds)

```bash
git add .
git commit -m "Update portfolio"
git push
```

**Done!** Your changes are live in 1-2 minutes.

---

## 🎉 Next Steps

1. ✅ Complete the Pre-Deployment Checklist above
2. ✅ Follow Deployment Steps 1-6
3. 📝 Update your name and links in `src/app/page.tsx`
4. 📊 Add your contributions to `src/data/contributions.ts`
5. 🎨 Customize colors in `tailwind.config.ts`
6. 📤 Share your portfolio with the world!

---

**Your AI Portfolio is ready to showcase your amazing GitHub contributions to the world! 🚀**

**Happy deploying! Your portfolio is waiting to impress the world. Go share it!**
