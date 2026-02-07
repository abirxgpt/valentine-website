// ===================================
// VALENTINE WEBSITE - MAIN LOGIC
// ===================================

// === STATE VARIABLES ===
let noClickCount = 0;
let yesBtnSize = 150; // starting width in px
let noBtnSize = 150;
let lovePercentage = 0;
let counterInterval = null;

// === DOM ELEMENTS ===
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainGif = document.getElementById('main-gif');
const responseMessage = document.getElementById('response-message');
const girlfriendNameEl = document.getElementById('girlfriend-name');

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupEventListeners();
    createFloatingHearts();
});

function initializePage() {
    const CONFIG = window.VALENTINE_CONFIG;

    // Apply configuration
    document.title = CONFIG.pageTitle;

    // Set girlfriend name
    if (girlfriendNameEl) {
        girlfriendNameEl.textContent = CONFIG.girlfriendName;
    }

    // Set button text
    if (yesBtn) yesBtn.textContent = CONFIG.buttons.yes;
    if (noBtn) noBtn.textContent = CONFIG.buttons.no;

    // Initialize button sizes
    if (yesBtn) yesBtn.style.width = yesBtnSize + 'px';
    if (noBtn) noBtn.style.width = noBtnSize + 'px';

    // Apply color scheme
    document.documentElement.style.setProperty('--primary-color', CONFIG.colors.primary);
    document.documentElement.style.setProperty('--secondary-color', CONFIG.colors.secondary);
    document.documentElement.style.setProperty('--accent-color', CONFIG.colors.accent);
}

// === EVENT LISTENERS ===
function setupEventListeners() {
    const CONFIG = window.VALENTINE_CONFIG;

    // Yes button
    if (yesBtn) {
        yesBtn.addEventListener('click', handleYesClick);
    }

    // No button
    if (noBtn) {
        noBtn.addEventListener('mouseenter', handleNoHover);
        noBtn.addEventListener('click', handleNoClick);

        // Touch support for mobile
        noBtn.addEventListener('touchstart', (e) => {
            if (CONFIG.features.noButtonMovement) {
                e.preventDefault();
                handleNoHover();
            }
        });
    }

    // Continue button (celebration)
    const continueBtn = document.getElementById('continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            if (CONFIG.features.enableLoveMeter) {
                showScreen('love-meter-screen');
                setTimeout(startLoveMeter, 500);
            } else if (CONFIG.features.enableRoseGarden) {
                showScreen('rose-garden-screen');
            } else {
                showScreen('final-message-screen');
            }
        });
    }

    // Love meter stop button
    const stopBtn = document.getElementById('stop-btn');
    if (stopBtn) {
        stopBtn.addEventListener('click', () => {
            clearInterval(counterInterval);
            showLoveResult(lovePercentage);
        });
    }

    // Next to roses button
    const nextRosesBtn = document.getElementById('next-roses-btn');
    if (nextRosesBtn) {
        nextRosesBtn.addEventListener('click', () => {
            if (CONFIG.features.enableRoseGarden) {
                showScreen('rose-garden-screen');
            } else {
                showScreen('final-message-screen');
            }
        });
    }

    // Final message button
    const finalMessageBtn = document.getElementById('final-message-btn');
    if (finalMessageBtn) {
        finalMessageBtn.addEventListener('click', () => {
            showScreen('final-message-screen');
        });
    }

    // Share button
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', handleShare);
    }
}

// === YES BUTTON LOGIC ===
function handleYesClick() {
    const CONFIG = window.VALENTINE_CONFIG;

    // Hide landing page
    showScreen('celebration-screen');

    // Trigger confetti
    launchConfetti();

    // Play music (if enabled)
    if (CONFIG.features.enableMusic) {
        playMusic();
    }

    // Auto-progress after delay (if love meter is disabled)
    if (!CONFIG.features.enableLoveMeter) {
        setTimeout(() => {
            if (CONFIG.features.enableRoseGarden) {
                showScreen('rose-garden-screen');
            } else {
                showScreen('final-message-screen');
            }
        }, CONFIG.behavior.autoProgressDelay);
    }
}

function growYesButton() {
    const CONFIG = window.VALENTINE_CONFIG;
    if (!CONFIG.features.yesButtonGrowth) return;

    if (yesBtnSize < CONFIG.behavior.yesButtonMaxSize) {
        yesBtnSize *= CONFIG.behavior.yesButtonGrowthRate;
        yesBtn.style.width = yesBtnSize + 'px';
        yesBtn.style.fontSize = (yesBtnSize / 10) + 'px';
    }
}

// === NO BUTTON LOGIC ===
function handleNoHover() {
    moveNoButton();
    shrinkNoButton();
    growYesButton();
}

function handleNoClick() {
    noClickCount++;
    changeGif();
    displayMessage();
    shrinkNoButton();
    growYesButton();
}

function shrinkNoButton() {
    const CONFIG = window.VALENTINE_CONFIG;
    if (noBtnSize > CONFIG.behavior.noButtonMinSize) {
        noBtnSize *= CONFIG.behavior.noButtonShrinkRate;
        noBtn.style.width = noBtnSize + 'px';
        noBtn.style.fontSize = (noBtnSize / 10) + 'px';
    }
}

function moveNoButton() {
    const CONFIG = window.VALENTINE_CONFIG;
    if (!CONFIG.features.noButtonMovement) return;

    const container = document.querySelector('.button-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtnSize - 20;
    const maxY = containerRect.height - 60;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function changeGif() {
    const CONFIG = window.VALENTINE_CONFIG;
    if (!mainGif) return;

    const gifIndex = Math.min(noClickCount - 1, CONFIG.media.gifs.sad.length - 1);
    if (gifIndex >= 0 && CONFIG.media.gifs.sad[gifIndex]) {
        mainGif.src = CONFIG.media.gifs.sad[gifIndex];
    }
}

function displayMessage() {
    const CONFIG = window.VALENTINE_CONFIG;
    if (!responseMessage) return;

    const messageIndex = Math.min(noClickCount - 1, CONFIG.noMessages.length - 1);
    responseMessage.textContent = CONFIG.noMessages[messageIndex];
    responseMessage.classList.remove('hidden');
    responseMessage.classList.add('fade-in');

    // Change background color after 3 clicks
    if (noClickCount > 3) {
        document.body.style.background = 'linear-gradient(135deg, #E8F4F8 0%, #D8E9F3 100%)';
    }
}

// === LOVE METER LOGIC ===
function startLoveMeter() {
    const CONFIG = window.VALENTINE_CONFIG;
    const percentageEl = document.getElementById('love-percentage');
    if (!percentageEl) return;

    lovePercentage = 0;
    let counterSpeed = CONFIG.behavior.loveMeterSpeed;

    counterInterval = setInterval(() => {
        // Increment with acceleration
        const increment = Math.floor(Math.random() * 20) + 10;
        lovePercentage += increment;

        // Random glitches
        if (Math.random() > 0.9) {
            lovePercentage += Math.floor(Math.random() * 100);
        }

        // Display with animation
        percentageEl.textContent = lovePercentage;
        percentageEl.classList.add('pulse');
        setTimeout(() => percentageEl.classList.remove('pulse'), 200);

    }, counterSpeed);
}

function showLoveResult(percentage) {
    const loveMessage = document.getElementById('love-message');
    const loveResult = document.getElementById('love-meter-result');
    const stopBtn = document.getElementById('stop-btn');

    if (!loveMessage || !loveResult) return;

    // Determine message based on percentage
    let emoji, message;

    if (percentage < 100) {
        emoji = "💕";
        message = "That's a start!";
    } else if (percentage < 500) {
        emoji = "🥰";
        message = "Wow! That's amazing!";
    } else if (percentage < 1000) {
        emoji = "🚀";
        message = "To infinity and beyond!";
    } else if (percentage < 5000) {
        emoji = "🥰🚀💝";
        message = "WOOOOW You love me that much??";
    } else {
        emoji = "👑";
        message = "This is legendary!";
    }

    loveMessage.innerHTML = `
        <h3>${emoji} ${message}</h3>
        <p>You love me <strong>${percentage}%</strong>!</p>
    `;

    loveResult.classList.remove('hidden');
    loveResult.classList.add('fade-in');

    if (stopBtn) {
        stopBtn.classList.add('hidden');
    }
}

// === MUSIC CONTROL ===
function playMusic() {
    const music = document.getElementById('background-music');
    if (music) {
        music.volume = 0.3;
        music.play().catch(e => {
            console.log('Autoplay blocked:', e);
        });
    }
}

// === SHARE FUNCTIONALITY ===
async function handleShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Valentine Message',
                text: 'Check out this special Valentine message! 💝',
                url: window.location.href
            });
        } catch (err) {
            console.log('Share failed:', err);
        }
    } else {
        // Fallback: copy to clipboard
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard! 📋');
        } catch (err) {
            console.log('Copy failed:', err);
        }
    }
}
