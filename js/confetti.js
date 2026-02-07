// ===================================
// CONFETTI PARTICLE SYSTEM
// ===================================

class ConfettiParticle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = (Math.random() - 0.5) * 4;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 10;

        // Rainbow colors
        this.colors = [
            '#FF1493', // Deep Pink
            '#FFB6C1', // Light Pink
            '#FF69B4', // Hot Pink
            '#FFD700', // Gold
            '#9370DB', // Purple
            '#DC143C', // Crimson
            '#FF6347', // Tomato
            '#FF1493'  // Deep Pink
        ];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

        // Random shape
        this.shape = Math.random() > 0.5 ? 'square' : 'circle';
        if (Math.random() > 0.7) this.shape = 'heart';
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        this.speedY += 0.1; // gravity
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;

        if (this.shape === 'square') {
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.shape === 'heart') {
            this.drawHeart(ctx, 0, 0, this.size / 2);
        }

        ctx.restore();
    }

    drawHeart(ctx, x, y, size) {
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(x, y + topCurveHeight);
        // Top left curve
        ctx.bezierCurveTo(
            x, y,
            x - size / 2, y,
            x - size / 2, y + topCurveHeight
        );
        // Bottom left curve
        ctx.bezierCurveTo(
            x - size / 2, y + (size + topCurveHeight) / 2,
            x, y + (size + topCurveHeight) / 1.2,
            x, y + size
        );
        // Bottom right curve
        ctx.bezierCurveTo(
            x, y + (size + topCurveHeight) / 1.2,
            x + size / 2, y + (size + topCurveHeight) / 2,
            x + size / 2, y + topCurveHeight
        );
        // Top right curve
        ctx.bezierCurveTo(
            x + size / 2, y,
            x, y,
            x, y + topCurveHeight
        );
        ctx.fill();
    }

    isOffScreen() {
        return this.y > this.canvas.height;
    }
}

function launchConfetti() {
    const CONFIG = window.VALENTINE_CONFIG;
    if (!CONFIG.features.enableConfetti) return;

    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    // Create particles
    for (let i = 0; i < 200; i++) {
        particles.push(new ConfettiParticle(canvas));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.update();
            particle.draw(ctx);

            // Remove off-screen particles
            if (particle.isOffScreen()) {
                particles.splice(index, 1);
            }
        });

        if (particles.length > 0) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// Handle window resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
