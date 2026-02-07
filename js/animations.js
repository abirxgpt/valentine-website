// ===================================
// ANIMATION HELPER FUNCTIONS
// ===================================

// === FLOATING HEARTS ANIMATION ===
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;

    const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝'];

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 40 + 20) + 'px';
        heart.style.animationDuration = (Math.random() * 7 + 8) + 's';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(heart);
    }
}

// === CREATE SVG ROSE ===
function createRoseSVG(color = '#DC143C') {
    return `
        <svg class="rose-svg" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
            <!-- Stem -->
            <line x1="50" y1="60" x2="50" y2="140" stroke="#228B22" stroke-width="3"/>
            
            <!-- Leaves -->
            <ellipse cx="40" cy="100" rx="8" ry="15" fill="#32CD32" transform="rotate(-30 40 100)"/>
            <ellipse cx="60" cy="120" rx="8" ry="15" fill="#32CD32" transform="rotate(30 60 120)"/>
            
            <!-- Petals -->
            <circle class="petal" cx="50" cy="50" r="20" fill="${color}" opacity="0.8"/>
            <circle class="petal" cx="40" cy="45" r="18" fill="${color}" opacity="0.7"/>
            <circle class="petal" cx="60" cy="45" r="18" fill="${color}" opacity="0.7"/>
            <circle class="petal" cx="45" cy="35" r="16" fill="${color}" opacity="0.9"/>
            <circle class="petal" cx="55" cy="35" r="16" fill="${color}" opacity="0.9"/>
            <circle class="petal" cx="50" cy="40" r="15" fill="${color}" opacity="1"/>
        </svg>
    `;
}

// === CREATE ROSE GARDEN ===
function createRoseGarden() {
    const CONFIG = window.VALENTINE_CONFIG;
    if (!CONFIG.features.enableRoseGarden) return;

    const container = document.getElementById('roses-container');
    if (!container) return;

    const roses = CONFIG.roses;

    roses.forEach((rose, index) => {
        const roseItem = document.createElement('div');
        roseItem.className = 'rose-item';
        roseItem.innerHTML = `
            <div class="rose-svg-container">
                ${createRoseSVG(rose.color)}
            </div>
            <div class="rose-message hidden">
                <h4>${rose.message}</h4>
                <p>${rose.detail}</p>
            </div>
        `;

        container.appendChild(roseItem);

        // Stagger bloom animation
        setTimeout(() => {
            roseItem.classList.add('blooming');
        }, index * 800); // 800ms delay between each

        // Click to reveal message
        roseItem.addEventListener('click', () => {
            const message = roseItem.querySelector('.rose-message');
            message.classList.remove('hidden');
            message.classList.add('fade-in');
        });
    });

    // Show continue button after all roses bloom
    setTimeout(() => {
        const btn = document.getElementById('final-message-btn');
        if (btn) {
            btn.classList.remove('hidden');
            btn.classList.add('fade-in');
        }
    }, roses.length * 800 + 2000);
}

// === POPULATE FINAL MESSAGE ===
function populateFinalMessage() {
    const CONFIG = window.VALENTINE_CONFIG;

    // Names
    const finalName = document.getElementById('final-name');
    const signature = document.getElementById('your-name-signature');
    if (finalName) finalName.textContent = CONFIG.girlfriendName;
    if (signature) signature.textContent = CONFIG.yourName;

    // Final message paragraphs
    const opening = document.getElementById('letter-opening');
    const body = document.getElementById('letter-body-text');
    const closing = document.getElementById('letter-closing');

    if (opening) opening.textContent = CONFIG.finalMessage.opening;
    if (body) body.textContent = CONFIG.finalMessage.body;
    if (closing) closing.textContent = CONFIG.finalMessage.closing;

    // Love reasons
    const reasonsList = document.getElementById('love-reasons-list');
    if (reasonsList) {
        reasonsList.innerHTML = ''; // Clear existing
        CONFIG.loveReasons.forEach((reason, index) => {
            const li = document.createElement('li');
            li.textContent = reason;
            li.classList.add('fade-in-up');
            li.style.animationDelay = (index * 0.1) + 's';
            reasonsList.appendChild(li);
        });
    }

    // Photos (if provided)
    if (CONFIG.features.enablePhotoGallery && CONFIG.photos && CONFIG.photos.length > 0) {
        const photoGallery = document.getElementById('photo-gallery');
        const photosGrid = document.getElementById('photos-grid');

        if (photoGallery && photosGrid) {
            photoGallery.classList.remove('hidden');

            CONFIG.photos.forEach(photo => {
                const polaroid = document.createElement('div');
                polaroid.className = 'polaroid';
                polaroid.innerHTML = `
                    <img src="${photo.src}" alt="${photo.caption}">
                    <p class="photo-caption">${photo.caption}</p>
                `;
                photosGrid.appendChild(polaroid);
            });
        }
    }
}

// === SCREEN TRANSITIONS ===
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Show target screen
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.remove('hidden');
        screen.classList.add('active');

        // Initialize specific screens
        if (screenId === 'rose-garden-screen') {
            createRoseGarden();
        } else if (screenId === 'final-message-screen') {
            populateFinalMessage();
        }
    }
}
