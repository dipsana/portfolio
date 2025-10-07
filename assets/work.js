const slides = {
    XOTime: {
        idx: 0,
        img: ['web-xo-1', 'web-xo-2', 'web-xo-3'],
        cap: ['Tie Dark', 'Dark O Win', 'Light X Win'],
        srs: 'xo-time-srs'
    },
    toDo: {
        idx: 0,
        img: ['web-to-do-1', 'web-to-do-2', 'web-to-do-3'],
        cap: ['Dark', 'Light', 'Custom Background'],
        srs: 'to-do-srs'
    },
    fakeflix: {
        idx: 0,
        img: ['web-stream-ui-demo', 'web-stream-ui-1', 'web-stream-ui-2', 'web-stream-ui-3', 'web-stream-ui-4', 'web-stream-ui-full'],
        cap: ['Welcome Page', 'Section 1', 'Section 2', 'FAQ', 'Footer', 'Full Landing Page'],
        srs: undefined
    },
    dateComp: {
        idx: 0,
        img: ['c-historians-estimator-demo', 'c-historians-estimator-norm', 'c-historians-estimator-feature', 'c-historians-estimator-ac'],
        cap: ['Welcome Screen', 'Normal Output', 'Feature Output', 'Auto-correct Output'],
        srs: 'historians-estimator-srs'
    },
    rPS: {
        idx: 0,
        img: ['c-rps-game-demo', 'c-rps-game'],
        cap: ['Gameplay 1', 'Gameplay 2'],
        srs: 'paper-cut-srs'
    },
    numCracker: {
        idx: 0,
        img: ['c-num-cracker-demo', 'c-num-cracker-exit', 'c-num-cracker-resilience'],
        cap: ['Continuation', 'Exit', 'Resilience'],
        srs: 'number-cracker-srs'
    },
    cLearn: {
        idx: 0,
        img: ['c-learn-1', 'c-learn-2'],
        cap: ['Preview 1', 'Preview 2'],
        srs: undefined
    },
    cExt: {
        idx: 0,
        img: ['c-ext-1', 'c-ext-2'],
        cap: ['Preview', 'Full Preview'],
        srs: undefined
    },
    cErr: {
        idx: 0,
        img: ['c-err-1', 'c-err-2'],
        cap: ['Preview', 'Full Preview'],
        srs: undefined
    },
    cyberSeq: {
        idx: 0,
        img: ['cyber-seq-1', 'cyber-seq-2'],
        cap: ['Preview', 'Full Preview'],
        srs: undefined
    },
    hrdob: {
        idx: 0,
        img: ['hrdob-1', 'hrdob-2'],
        cap: ['Preview 1', 'Preview 2'],
        srs: undefined
    }
};

// Create Web Projects Cards
const webCards = document.body.querySelector('main .web-cards');

createCard(
    webCards, 'XOTime',
    'web-xo-1.png', 'XO Time',
    'A simple game built using vanilla JavaScript.', true,
    'https://dipsana.github.io/xo-time/',
    'https://github.com/dipsana/xo-time.git'
);

createCard(
    webCards, 'toDo',
    'web-to-do-1.png', 'To-Do',
    'Organize your tasks with this dynamic web app.', true,
    'https://dipsana.github.io/to-do/',
    'https://github.com/dipsana/to-do.git'
);

createCard(
    webCards, 'fakeflix',
    'web-stream-ui-demo.png', 'Streaming Platform UI',
    'A Netflix inspired landing page made by me.', true,
    'https://dipsana.github.io/streaming-platform-ui/',
    'https://github.com/dipsana/streaming-platform-ui.git'
);

// Create C Project Cards
const cCards = document.body.querySelector('main .c-cards');

createCard(
    cCards, 'dateComp',
    'c-historians-estimator-demo.png', 'Historians Estimator',
    'C console-based program to compare difference between two dates.', true,
    'https://replit.com/@dipsana/Date-Comparison?v=1',
    'https://github.com/dipsana/historian-estimator.git'
);

createCard(
    cCards, 'rPS',
    'c-rps-game-demo.png', 'Paper Cut',
    'C console-based game to play rock, paper and scissors with you.', true,
    'https://replit.com/@dipsana/Rock-paper-sizors-game?v=1',
    'https://github.com/dipsana/paper-cut.git'
);

createCard(
    cCards, 'numCracker',
    'c-num-cracker-demo.png', 'Number Cracker',
    'C console-based random number guessing game within 1–100.', true,
    'https://replit.com/@dipsana/Random-number-guessing-game?v=1',
    'https://github.com/dipsana/number-cracker.git'
);

// Create open-source cards
const oCards = document.body.querySelector('main .open-cards');

createCard(
    oCards, 'cLearn',
    'c-learn-1.png', 'Learn C',
    'My self-learning C journey with organized notes.', true,
    'https://github.com/DipsanaRoy/learn-c-with-practice.git'
);

createCard(
    oCards, 'cExt',
    'c-ext-1.png', 'C Extensions',
    'My extended C self-learning knowledge with organized notes.', true,
    'https://github.com/DipsanaRoy/c-extensions.git'
);

createCard(
    oCards, 'cErr',
    'c-err-1.png', 'C Error Handling',
    'My self-learning C error handling journey with organized notes.', true,
    'https://github.com/DipsanaRoy/c-error-handling.git'
);

createCard(
    oCards, 'cyberSeq',
    'cyber-seq-1.png', 'Cyber Security',
    'MAKAUT based Cyber Security notes.', true,
    'https://github.com/DipsanaRoy/c-error-handling.git'
);

createCard(
    oCards, 'hrdob',
    'hrdob-1.png', 'HR Development & Org Behavior',
    'MAKAUT based Human Resource Development and Organizational Behavior notes.', true,
    'https://github.com/DipsanaRoy/c-error-handling.git'
);

// Dynamic image slider generator
document.querySelectorAll('.card').forEach(elem => {
    const elemId = elem.id;
    const key = slides[elemId];

    const dotsHTML = key.cap.map((_, i) =>
        `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="currentSlide('${elemId}', ${i})">${i + 1}</div>`
    ).join('');

    const sectionHTML = `
        <section class="slider-section ${elemId}-slider">
            <section class="img-slider">
                <a class="prev" onclick='plusSlide("${elemId}", -1)'>&#10094;</a>
                <img src="assets/images/${key.img[0]}.png" alt="${key.img[0]}" class="${elemId} active">
                <a class="next" onclick='plusSlide("${elemId}", 1)'>&#10095;</a>
            </section>
            <figcaption class="img-caption">${key.cap[0]}</figcaption>
            <figcaption class="dots">${dotsHTML}</figcaption>
            <a href="assets/documents/${key.srs}.pdf" class="btn" download>Download SRS</a>
        </section>
    `;

    elem.insertAdjacentHTML('afterend', sectionHTML);
});

// Remove buttons from open source
document.querySelectorAll('main #open-source .open-cards .slider-section .btn').forEach(elem => {
    elem.remove();
});

// Remove button from streaming-platform-ui
document.querySelector('main #web-projects .web-cards .fakeflix-slider .btn').remove();

// Image slider functions
function plusSlide(key, n) {
    showSlides(key, slides[key].idx + parseInt(n));
}

function currentSlide(key, n) {
    showSlides(key, parseInt(n));
}

(async function slideShow() {
    setInterval(() => {
        for (const key in slides) {
            plusSlide(key, 1);
        }
    }, 6000);
})();

function showSlides(key, n) {
    const elem = slides[key];
    const elemImg = elem.img;

    const sliderSect = document.body.querySelector(`main .projects .${key}-slider`);
    const image = sliderSect.querySelector('.img-slider>img');
    const figCap = sliderSect.querySelector('.img-caption');

    // Remove active from current dot & img only
    sliderSect.querySelector(`.dots [data-index="${elem.idx}"]`)?.classList.remove('active');
    image.classList.remove('active');

    setTimeout(() => {
        // Calculate new index
        elem.idx = (n + elemImg.length) % elemImg.length;

        // Add active to new dot & img
        sliderSect.querySelector(`.dots [data-index="${elem.idx}"]`).classList.add('active');
        image.classList.add('active');

        image.src = `assets/images/${elemImg[elem.idx]}.png`;
        image.alt = elemImg[elem.idx];
        figCap.innerHTML = elem.cap[elem.idx];
    }, 180);
}
