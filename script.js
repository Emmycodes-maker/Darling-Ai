// ===== PASSWORD VERIFICATION =====
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const correctPassword = '21122024'; // December 21, 2024 in DDMMYYYY format
    
    if (passwordInput === correctPassword) {
        localStorage.setItem('loveWebsiteAuthenticated', 'true');
        unlockWebsite();
    } else {
        alert('Wrong password! Try again. Hint: Our anniversary date (DDMMYYYY)');
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
    }
}

function unlockWebsite() {
    const passwordScreen = document.getElementById('passwordScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Hide password screen
    passwordScreen.style.display = 'none';
    
    // Show main content
    mainContent.classList.remove('hidden');
    mainContent.style.display = 'block';
    
    // Start animations and features
    setTimeout(function() {
        initializeStars();
        startHeartAnimation();
        startRoseAnimation();
        startCountdown();
        playBackgroundMusic();
    }, 100);
}

// ===== STARS BACKGROUND =====
function initializeStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// ===== FLOATING HEARTS =====
function startHeartAnimation() {
    const heartsContainer = document.querySelector('.hearts-container');
    if (!heartsContainer) return;
    
    setInterval(function() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.animationDelay = '0s';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(function() {
            heart.remove();
        }, 6000);
    }, 500);
}

// ===== FALLING ROSES =====
function startRoseAnimation() {
    const rosesContainer = document.querySelector('.roses-container');
    if (!rosesContainer) return;
    
    setInterval(function() {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.innerHTML = '🌹';
        rose.style.left = Math.random() * 100 + '%';
        rose.style.top = '-50px';
        rose.style.animationDelay = '0s';
        
        rosesContainer.appendChild(rose);
        
        setTimeout(function() {
            rose.remove();
        }, 8000);
    }, 1000);
}

// ===== ANNIVERSARY COUNTDOWN TIMER =====
function startCountdown() {
    function updateTimer() {
        // Anniversary date: December 21, 2024
        const anniversaryDate = new Date('2024-12-21T00:00:00').getTime();
        const now = new Date().getTime();
        const distance = anniversaryDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = Math.max(0, days);
        if (hoursEl) hoursEl.textContent = Math.max(0, hours);
        if (minutesEl) minutesEl.textContent = Math.max(0, minutes);
        if (secondsEl) secondsEl.textContent = Math.max(0, seconds);
        
        if (distance < 0) {
            if (daysEl) daysEl.textContent = '∞';
            if (hoursEl) hoursEl.textContent = '∞';
            if (minutesEl) minutesEl.textContent = '∞';
            if (secondsEl) secondsEl.textContent = '∞';
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ===== SMOOTH SCROLLING =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== BACKGROUND MUSIC =====
function playBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');
    if (audio) {
        audio.volume = 0.3;
        audio.play().catch(function(error) {
            console.log('Audio autoplay prevented:', error);
        });
    }
}

// ===== "NO" BUTTON ESCAPE =====
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    if (!noBtn) return;
    
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    noBtn.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
}

// ===== YES BUTTON CELEBRATION =====
function handleYes() {
    const celebration = document.getElementById('celebration');
    if (celebration) {
        celebration.classList.remove('hidden');
    }
    
    // Create confetti
    createConfetti();
    
    // Create fireworks
    createFireworks();
    
    // Play celebration sound effect
    playSound();
}

// ===== CONFETTI ANIMATION =====
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    if (!confettiContainer) return;
    
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.top = '-10px';
        confettiPiece.style.background = ['#ff1493', '#ff69b4', '#ffd700', '#ff1493'][Math.floor(Math.random() * 4)];
        confettiPiece.style.animationDelay = Math.random() * 0.5 + 's';
        
        confettiContainer.appendChild(confettiPiece);
        
        setTimeout(function() {
            confettiPiece.remove();
        }, 3500);
    }
}

// ===== FIREWORKS ANIMATION =====
function createFireworks() {
    const fireworksCount = 10;
    
    for (let i = 0; i < fireworksCount; i++) {
        setTimeout(function() {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.5;
            
            createFirework(x, y);
        }, i * 200);
    }
}

function createFirework(x, y) {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.background = ['#ff1493', '#ff69b4', '#ffd700', '#ffed4e'][Math.floor(Math.random() * 4)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        
        document.body.appendChild(particle);
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let px = x;
        let py = y;
        let vxCurrent = vx;
        let vyCurrent = vy;
        
        const animate = function() {
            px += vxCurrent;
            py += vyCurrent;
            vyCurrent += 0.2; // gravity
            
            particle.style.left = px + 'px';
            particle.style.top = py + 'px';
            particle.style.opacity = 1 - (py - y) / 300;
            
            if (py - y < 300) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// ===== SOUND EFFECT =====
function playSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Sound effect error:', e);
    }
}

// ===== INITIALIZE ON LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
    }
    
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('loveWebsiteAuthenticated');
    
    if (isAuthenticated === 'true') {
        unlockWebsite();
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(function(section) {
        observer.observe(section);
    });
});
