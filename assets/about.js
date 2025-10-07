console.log("about.js running...");
let background = document.body;

function updateBackgroundPosition(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    background.style.backgroundPosition = `${mouseX * 0.07}% ${mouseY * 0.07}%`;
}

// Update on mouse move
window.addEventListener('mousemove', updateBackgroundPosition);

// Recalculate when window is resized
window.addEventListener('resize', updateBackgroundPosition);

// Add Education Cards
const eduCards = document.getElementById('edu-cards');

// Techno International Batanagar
createCard(
    eduCards, 'tib',
    'tib.jpg', 'Techno International Batanagar',
    'B.Tech(CSE) degree in 2026'
);

// DPS Joka
createCard(
    eduCards, 'dpsJoka',
    'dps_joka.webp', 'Delhi Public School, Joka',
    'Higher Secondary (2021-22)'
);

// KECS Amtala
createCard(
    eduCards, 'kecsAmtala',
    'kecs_amtala.jpg', 'K.E. Carmel School, Amtala',
    'Secondary (2019-20)'
);

// KECS Sarisha
createCard(
    eduCards, 'kecsSarisha',
    'kecs_sarisha.jpg', 'K.E. Carmel School, Sarisha',
    'Class 1 - 9 (2010-19)'
);

// Ramakrishna Mission
createCard(
    eduCards, 'rmksMission',
    'rmks_mission.jpg', 'Ramakrishna Mission',
    'Kindergarten'
);

// Add Write Cards
const wCards = document.getElementById('write-cards');

// The Whispers of Nerida
createCard(
    wCards, 'whispersOfNerida',
    'the-whispers-of-nerida.jpg', 'The Whispers of Nerida',
    'A mystical adventure', false,
    'https://medium.com/@dipsana03174245328/the-whispers-of-nerida-34deded826fb'
);

document.body.querySelectorAll('main #digital-awareness .incident-card').forEach(iCard => {
    const detailsSection = iCard.querySelector('.incident-details');
    const [rMBtn, rLBtn] = iCard.querySelectorAll('button');

    rMBtn.addEventListener('click', () => {
        detailsSection.classList.add('show');
        rMBtn.classList.add('hide');
    });
    rLBtn.addEventListener('click', () => {
        detailsSection.classList.remove('show');
        rMBtn.classList.remove('hide');
    });
});
