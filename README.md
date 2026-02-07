# Valentine Rose Website

A romantic, interactive Valentine's Day website to ask someone special to be your Valentine! 💝

**Live Demo**: [Add your GitHub Pages URL here after deployment]

## Quick Start (5 minutes to deploy!)

### 1. Personalize the Website
Edit `js/config.js` and change these lines:
```javascript
girlfriendName: "Her Name Here",  // Change this!
yourName: "Your Name",            // Change this!
```

### 2. Deploy to GitHub Pages (FREE!)

```bash
# Navigate to the project folder
cd valentine-rose-website

# Initialize git
git init
git add .
git commit -m "💝 Valentine website for my crush"

# Create GitHub repo and push (replace YOUR-USERNAME)
gh repo create valentine-website --public --source=. --remote=origin --push
```

**Don't have `gh` installed?** Do it manually:
1. Go to https://github.com/new
2. Create a repository called `valentine-website`
3. Run these commands:
```bash
git remote add origin https://github.com/YOUR-USERNAME/valentine-website.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes and visit: `https://YOUR-USERNAME.github.io/valentine-website/`

### 4. Share with Your Crush! 💕
Copy the URL and send it to them!

---

## Alternative Deployment (Even Faster!)

### Netlify Drop (30 seconds!)
1. Visit https://app.netlify.com/drop
2. Drag the entire `valentine-rose-website` folder
3. Get instant URL!
4. Share it!

---

## Features

✨ Interactive Yes/No buttons (No button moves and shrinks!)
🎊 Confetti celebration with particle physics
💕 Animated love meter
🌹 Beautiful rose garden with messages
💌 Personalized love letter
📱 Fully responsive (works on all devices)
🎨 Glassmorphism design

---

## Customization Tips

### Change Colors
Edit `js/config.js`:
```javascript
colors: {
    primary: "#FF1493",    // Main pink
    secondary: "#FF69B4",  // Light pink
    accent: "#FFD700"      // Gold accents
}
```

### Add Your Own Reasons
Edit the `loveReasons` array with real things you admire about them!

### Replace Placeholder Images
Want real GIFs? Download from Giphy and replace the SVG files in `assets/images/`

---

## Tech Stack

- Pure HTML5, CSS3, JavaScript (no dependencies!)
- Canvas API for confetti
- SVG for images
- CSS animations
- Fully client-side (works anywhere!)

---

Made with 💖 for Valentine's Day
