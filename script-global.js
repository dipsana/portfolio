// GLOBALLY set styles to constants for colorful console
const red = "color: red;";
const green = "color: green;";
const yellow = "color: #d7d700; font-style: italic;";
console.log("script-global.js running...");

// Add favicon dynamically
function setFavicon(faviconUrl) {
    try {
        let link = document.querySelector("link[rel='shortcut icon']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "shortcut icon";
            link.type = "image/webp";
            document.head.appendChild(link);
        }
        link.href = faviconUrl;
        console.log("%c" + faviconUrl + "%c applied!", yellow, green);
    } catch (error) {
        console.error("%c" + faviconUrl + "%c not applied!", yellow, red);
    }
}

// Add external styles dynamically
function setStylesheet(stylesheetUrl) {
    try {
        let link = document.querySelector(`link[href="${stylesheetUrl}"]`);
        if (!link) {
            link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = stylesheetUrl;
            document.head.appendChild(link);
        }
        console.log("%c" + stylesheetUrl + "%c applied!", yellow, green);
    } catch (error) {
        console.error("%c" + stylesheetUrl + "%c not applied!", yellow, red);
    }
}

// Apply favicon and styles
setFavicon("favicon.webp");
setStylesheet("style-global.css");

// Function to fetch and inject HTML content
async function loadComponent(selector, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const content = await response.text();
            document.querySelector(selector).innerHTML = content;
            console.log("%c" + selector + "%c loaded to %c" + file + "%c.", yellow, green, yellow, green);
        } else {
            console.error(`%cFailed to load %c${file}: %c${response.status}`, red, yellow, red);
        }
    } catch (error) {
        console.error(`%cError loading %c${file}:`, red, yellow, error);
    }
}

// Load header and footer components
loadComponent("#header", "header.html");
loadComponent("#footer", "footer.html");

// Heading Animations
window.onload = function () {
    const sections = document.querySelectorAll('main h1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add fade effect class
                observer.unobserve(entry.target);   // Stop observing once shown
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
};

// Global Cards function description
function createCard(cards, ID, imgName, title, desc, separator = false, link1, link2) {
    if (!cards) {
        console.error("No .cards container found!");
        return;
    }

    const linksHTML = [
        link1 ? `<a target="_blank" href="${link1}" class="card-link">${title} Preview</a>` : '',
        link2 ? `<a target="_blank" href="${link2}" class="card-link">${title} Source Code</a>` : ''
    ].join('');

    const article = document.createElement('article');
    article.className = `card ${separator ? 'a-underline' : ''}`;
    article.id = ID;
    article.innerHTML = `
        <img src="assets/images/${imgName}" alt="${imgName}" class="card-img">
        <h3 class="card-title">${title}</h3>
        <p class="card-desc">${desc}</p>
        <div class="card-links">${linksHTML}</div>`;

    cards.append(article);
}