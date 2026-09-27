// ============================================
// ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ============================================
function nextPage(pageNum) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));

    const target = document.getElementById('page' + pageNum);
    if (target) {
        target.classList.add('active');
        createHeartBurst(12);

        // Прокрутка вверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ============================================
// ПОКАЗ СООБЩЕНИЯ (3 СЕК) + САЛЮТ
// ============================================
function showMessage(text) {
    const overlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popupMessage');
    const inner = document.getElementById('popupInner');

    inner.textContent = text;
    overlay.classList.add('show');
    popup.classList.add('show');

    createHeartBurst(50);

    setTimeout(() => {
        popup.classList.remove('show');
        overlay.classList.remove('show');
    }, 3000);
}

// ============================================
// ЛЕТАЮЩИЕ ЛЕПЕСТКИ
// ============================================
function createPetal() {
    const petals = document.getElementById('petals');
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const emojis = ['🌸', '💕', '✨', '💖', '🌷', '💗', '🌸', '💝', '🌺', '💞'];
    petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 20 + 20) + 'px';
    petal.style.animationDuration = (Math.random() * 8 + 8) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';

    petals.appendChild(petal);
    setTimeout(() => petal.remove(), 20000);
}

// Запуск лепестков
setInterval(createPetal, 800);
for (let i = 0; i < 8; i++) {
    setTimeout(createPetal, i * 150);
}

// ============================================
// БЛЁСТКИ
// ============================================
function createSparkle() {
    const sparkles = document.getElementById('sparkles');
    const spark = document.createElement('div');
    spark.classList.add('sparkle');

    const emojis = ['✨', '⭐', '💫', '🌟'];
    spark.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    spark.style.left = Math.random() * 100 + '%';
    spark.style.top = Math.random() * 100 + '%';
    spark.style.fontSize = (Math.random() * 10 + 12) + 'px';
    spark.style.animationDuration = (Math.random() * 2 + 2) + 's';
    spark.style.animationDelay = Math.random() * 2 + 's';

    sparkles.appendChild(spark);
    setTimeout(() => spark.remove(), 5000);
}

setInterval(createSparkle, 400);

// ============================================
// ПУЗЫРИ
// ============================================
function createBubble() {
    const bubbles = document.getElementById('bubbles');
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 25 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
    bubble.style.animationDelay = Math.random() * 3 + 's';

    bubbles.appendChild(bubble);
    setTimeout(() => bubble.remove(), 22000);
}

setInterval(createBubble, 1200);

// ============================================
// САЛЮТ ИЗ БОЛЬШИХ СЕРДЕЧЕК
// ============================================
function createHeartBurst(count = 15) {
    const hearts = ['💖', '💕', '❤️', '💗', '💓', '🌸', '💘', '💝', '🌷', '💞', '✨', '🌺'];

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = (Math.random() * 45 + 35) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9997';
        heart.style.transition = 'all 2.2s cubic-bezier(0.15, 0.7, 0.3, 1)';
        heart.style.filter = 'drop-shadow(0 0 15px rgba(255, 92, 168, 0.95))';

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 550 + 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const rotation = Math.random() * 720 - 360;

        requestAnimationFrame(() => {
            heart.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(1.4)`;
            heart.style.opacity = '0';
        });

        setTimeout(() => heart.remove(), 2200);
    }
}

// ============================================
// АВТО-СОЗДАНИЕ ДЕКОРАЦИЙ ПРИ ЗАГРУЗКЕ
// ============================================
window.addEventListener('load', () => {
    // Приветственный салют
    setTimeout(() => createHeartBurst(20), 500);

    // Постоянные блёстки в фоне
    for (let i = 0; i < 10; i++) {
        setTimeout(createSparkle, i * 100);
    }

    // Пузыри
    for (let i = 0; i < 3; i++) {
        setTimeout(createBubble, i * 400);
    }
});

// ============================================
// ПЛАВНЫЙ ПАРАЛЛАКС НА ФОНЕ
// ============================================
document.addEventListener('mousemove', (e) => {
    const glow1 = document.querySelector('.bg-glow-1');
    const glow2 = document.querySelector('.bg-glow-2');

    if (!glow1 || !glow2) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    glow1.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    glow2.style.transform = `translate(${-x}px, ${-y}px) scale(1.1)`;
});

// ============================================
// ДВОЙНОЙ КЛИК ПО ФОНУ — САЛЮТ
// ============================================
document.body.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    createHeartBurst(25);
});
