// ===================================
// VALENTINE WEBSITE CONFIGURATION
// ===================================
// Customize these values for your girlfriend!

const CONFIG = {
    // === PERSONALIZATION ===
    girlfriendName: "My Cutuuu",           // Her name - CHANGE THIS!
    yourName: "Abir",                    // Your name - CHANGE THIS!
    pageTitle: "Will You Be My Valentine? 💝",  // Browser tab title

    // === COLORS ===
    colors: {
        primary: "#FF1493",      // Deep Pink
        secondary: "#FFB6C1",    // Light Pink
        accent: "#FF69B4",       // Hot Pink
        background: "linear-gradient(135deg, #FFF5F7 0%, #FFE5E9 100%)"
    },

    // === QUESTIONS ===
    questions: {
        first: "Will you be my Valentine?",
        loveMeter: "How much do you love me?",
        final: "Will you make this Valentine's Day special?"
    },

    // === BUTTON TEXT ===
    buttons: {
        yes: "Yes! 💝",
        no: "No",
        stop: "Stop! ❤️",
        continue: "Continue ❤️",
        next: "Next 💕"
    },

    // === "NO" BUTTON MESSAGES ===
    noMessages: [
        "Wait, really? 🥺",
        "Give me a chance? 😢",
        "I've been wanting to ask you for so long! 💔",
        "Please? I promise to make you smile! 😭",
        "Just one chance? 🙏",
        "I won't give up that easily! 💪❤️",
        "Pretty please? I really like you! 🥺👉👈",
        "What if I told you I've liked you for a while? 💕"
    ],

    // === REASONS WHY I LIKE YOU ===
    // Customize these with real things you've noticed about your crush!
    loveReasons: [
        "The way you motivates me",
        "The way you cared for me when i was sick",
        "How kind you are to everyone around you",
        "Your smile is so mesmerizing",
        "The day we met, I can't forget it ever",
        "You're the most beautiful soul I can ever meet",
        "How you are so cutest and lovely"
    ],

    // === ROSE MESSAGES ===
    roses: [
        {
            color: "#DC143C",
            message: "The first time I saw you",
            detail: "I couldn't stop thinking about you since that day."
        },
        {
            color: "#FF1493",
            message: "Your amazing smile",
            detail: "It literally makes my heart skip a beat."
        },
        {
            color: "#FF69B4",
            message: "When I hear you laugh",
            detail: "I find myself smiling without even realizing it."
        },
        {
            color: "#FFB6C1",
            message: "The way you light up a room",
            detail: "Everyone gravitates toward your positive energy."
        },
        {
            color: "#C71585",
            message: "Your kindness",
            detail: "The way you treat people shows your beautiful heart."
        },
        {
            color: "#DB7093",
            message: "How you inspire me",
            detail: "You make me want to be a better person."
        },
        {
            color: "#FF1493",
            message: "Every little thing",
            detail: "All the small moments that made me fall for you."
        },
        {
            color: "#DC143C",
            message: "Taking this chance",
            detail: "I hope this is the start of something amazing. 💖"
        }
    ],

    // === PHOTOS (Optional) ===
    // Add photos of you two together
    photos: [
        // Uncomment and customize when you have photos
        // { src: "assets/images/photos/photo1.jpg", caption: "Our first date" },
        // { src: "assets/images/photos/photo2.jpg", caption: "That amazing trip" },
        // { src: "assets/images/photos/photo3.jpg", caption: "Just being us" },
        // { src: "assets/images/photos/photo4.jpg", caption: "Forever moments" }
    ],

    // === FINAL MESSAGE ===
    finalMessage: {
        opening: "I've been wanting to tell you this for a while now... Every time I see you, my heart does this little flutter thing that I can't quite explain. Your smile genuinely brightens my day, and I find myself looking forward to any chance to talk to you.",
        body: "I know this might seem sudden, but I've been gathering the courage to ask you this for some time. You're someone truly special, and I'd love the chance to get to know you better. Whether it's grabbing coffee, going on an adventure, or just hanging out, I promise to make you smile.",
        closing: "So... will you give me a chance? This Valentine's Day could be the start of something really amazing. No pressure, but I really hope you'll say yes. 💕"
    },

    // === FEATURES ===
    features: {
        enableMusic: false,           // Background music on/off (set to false by default)
        enableConfetti: true,        // Confetti animation on/off
        enableLoveMeter: true,       // Love percentage feature
        enableRoseGarden: true,      // Rose bloom animation
        enablePhotoGallery: false,   // Photo gallery (set true if adding photos)
        noButtonMovement: true,      // Make "No" button move around
        yesButtonGrowth: true        // Make "Yes" button grow
    },

    // === MEDIA ===
    media: {
        backgroundMusic: "assets/audio/romantic-music.mp3",
        gifs: {
            initial: "assets/images/gif1-happy.svg",
            sad: [
                "assets/images/gif2-confused.svg",
                "assets/images/gif3-sad.svg",
                "assets/images/gif4-crying.svg",
                "assets/images/gif5-pleading.svg",
                "assets/images/gif6-heartbroken.svg",
                "assets/images/gif7-hopeful.svg"
            ],
            celebration: "assets/images/celebration.svg"
        }
    },

    // === BEHAVIOR SETTINGS ===
    behavior: {
        yesButtonGrowthRate: 1.2,     // 20% growth per interaction
        noButtonShrinkRate: 0.85,     // 15% shrink per interaction
        yesButtonMaxSize: 750,        // Max width in pixels (500% of 150px)
        noButtonMinSize: 45,          // Min width in pixels (30% of 150px)
        autoProgressDelay: 5000,      // ms to auto-progress after celebration
        loveMeterSpeed: 50            // ms between counter increments
    }
};

// Make config globally available
window.VALENTINE_CONFIG = CONFIG;
