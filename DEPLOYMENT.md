# 🚀 Quick Deployment Guide

## FASTEST: Netlify Drop (30 seconds)

1. Go to: https://app.netlify.com/drop
2. Drag the entire `valentine-rose-website` folder onto the page
3. Get instant URL! (something like: `https://romantic-valentine-abc123.netlify.app`)
4. ✅ **DONE!** Send this URL to your crush!

---

## GitHub Pages (5 minutes, FREE forever)

### Option A: Using GitHub CLI (if installed)
```powershell
cd valentine-rose-website
git init
git add .
git commit -m "💝 Valentine website"
gh repo create valentine-website --public --source=. --remote=origin --push
```

Then:
1. Go to https://github.com/YOUR-USERNAME/valentine-website/settings/pages
2. Select "main" branch → Save
3. Wait 2-3 minutes
4. Visit: `https://YOUR-USERNAME.github.io/valentine-website/`

### Option B: Manual (No CLI needed)
```powershell
cd valentine-rose-website
git init
git add .
git commit -m "💝 Valentine website"
```

Then:
1. Go to https://github.com/new
2. Name it: `valentine-website`
3. Make it **Public**
4. Click "Create repository"
5. Copy the commands shown and run them:
```powershell
git remote add origin https://github.com/YOUR-USERNAME/valentine-website.git
git branch -M main
git push -u origin main
```

6. Go to Settings → Pages → Select "main" branch → Save
7. Wait 2-3 minutes for deployment
8. Your URL: `https://YOUR-USERNAME.github.io/valentine-website/`

---

## Vercel (Alternative, also free)

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Get instant URL!

---

## ⚡ BEFORE Deploying - Personalize!

Edit `js/config.js`:
```javascript
girlfriendName: "Her Actual Name",  // LINE 11 - CHANGE THIS!
yourName: "Your Name",               // LINE 12 - CHANGE THIS!
```

That's it! The website is ready to send! 💕

---

## 📱 How to Share

After deploying, just send her the URL via:
- Text message
- WhatsApp
- Instagram DM
- Wherever you chat!

Example message:
> "Hey! I made something special for you 💕 
> Check it out: [YOUR-URL]"

---

## 🎯 Tips

- **Test First**: Open the URL yourself before sharing
- **Mobile Friendly**: She can open it on her phone!
- **Works Offline**: Once loaded, works without internet
- **No Account Needed**: She just clicks and enjoys!

Good luck! 🍀💝
