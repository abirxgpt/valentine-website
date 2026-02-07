# 💝 Quick Customization Checklist

Before sending to your crush, personalize these!

## ✅ MUST DO (2 minutes)

### 1. Change Names
Open `js/config.js` and edit:

**Line 11:**
```javascript
girlfriendName: "Sarah",  // ← Put HER name here!
```

**Line 12:**
```javascript
yourName: "Alex",  // ← Put YOUR name here!
```

---

## 🎨 OPTIONAL (5-10 minutes)

### 2. Add Real Reasons You Like Her
Edit lines 48-56 in `js/config.js`:

```javascript
loveReasons: [
    "Your smile absolutely lights up the room",  // ← Change these!
    "The way you laugh makes my day better",
    "How kind you are to everyone around you",
    "Your confidence and the way you carry yourself",
    // Add more specific things YOU notice about HER!
],
```

### 3. Customize Rose Messages
Edit lines 60-95 in `js/config.js` with your own moments:

```javascript
{
    message: "The first time I saw you",
    detail: "I couldn't stop thinking about you since that day."
    // ← Make this YOUR story!
},
```

### 4. Personalize Final Letter
Edit lines 113-117 in `js/config.js`:

Change the opening, body, and closing paragraphs to YOUR words!

---

## 🎨 Advanced (Optional)

### Change Colors
Lines 15-19 in `js/config.js`:
```javascript
colors: {
    primary: "#FF1493",    // Main pink
    secondary: "#FF69B4",  // Light pink  
    accent: "#FFD700"      // Gold
}
```

Try: `#9D50BB` (purple), `#FF6B9D` (coral), `#FF1744` (red)

---

## ✨ Final Check

Before deploying:
1. ✅ Changed her name
2. ✅ Changed your name
3. ✅ (Optional) Added personal reasons
4. ✅ Test locally: Open `index.html` or visit http://localhost:8000

Ready to deploy! See `DEPLOYMENT.md` 🚀
