# 🪶 Personal Portfolio — Dipsana Roy

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A fully responsive and interactive personal portfolio website built using **HTML**, **CSS**, and **JavaScript**.
This project showcases my **skills, experience, digital awareness**, and **creative works**, while demonstrating **clean architecture**, **performance optimization**, and **modern UI/UX practices**.

---

## ✨ Features

* **Responsive Design:** Works seamlessly across all screen sizes using `clamp()` and media queries.

* **Independent Home Page:** Fully functional even without global scripts or styles.

* **Typing Animation:** Dynamic display of skills and areas of expertise.

* **Gradient Text & Animated Headings:** Adds an elegant, modern visual appeal.

* **Modular Architecture:** Low coupling and high cohesion — each section operates independently.

* **Home & Work Sections:**

  * Moving, animated backgrounds to create an immersive and dynamic user experience.
  * Project cards with dynamic content generation.
  * Minimalist image slider with smooth transition effects, hover animations, and numbered navigation dots.
  * Optional **Download SRS** button available for select projects.

* **About & Insights Section:**

  * Interactive profile image responding to cursor movement for enhanced user engagement.
  * Education and experience cards with links to **HackerRank**, **LinkedIn**, and **LeetCode**.
  * Digital Awareness summary with **Read More / Read Less** toggles for concise or detailed viewing.
  * Writings section showcasing the author’s first novel with curly underline and gradient heading animations.

* **Contact Section:**

  * Custom form integrated with **Google Forms backend** for seamless submissions.
  * Regex validation implemented for all inputs.
  * Designed in **dark mode** for optimal eye comfort — even preferred by light-mode users.

* **Global Assets:**

  * Shared resources limited to `script-global.js` and `style-global.css` to minimize redundancy and improve maintainability.

* **Fallbacks:**

  * Each independent module includes lightweight backup logic to ensure functionality even if a global file fails.

---

## 📁 Clickable Folder Structure

[portfolio/](/)  
├── [assets/](/assets)  
│   ├── [documents/](/assets/documents)  
│   ├── [images/](/assets/images)  
│   ├── [videos/](/assets/videos)  
│   ├── ...  
│   └── [section-modules/](/assets)  ← contains CSS and JS modules for each section  
│  
├── [index.html](/index.html)  
├── [about.html](/about.html)  
├── [work.html](/work.html)  
├── [contact.html](/contact.html)  
│  
├── [script-global.js](/script-global.js)  
├── [style-global.css](/style-global.css)  
├── [favicon.webp](/favicon.webp)  
│  
├── [🕒CHANGELOG.md](/CHANGELOG.md)  
├── [🔑LICENSE](/LICENSE)  
├── [📄README.md](/README.md)  
└── [📓portfolio-srs.pdf](/portfolio-srs.pdf)

---

## 🚀 Installation & Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/dipsana/portfolio.git
   ```

2. Navigate to the folder:

   ```bash
   cd portfolio
   ```

3. Open `index.html` in your browser.

---

## 🪪 License

This project is protected under the **Creative Commons Attribution–NonCommercial–NoDerivatives 4.0** license.
It is available for **educational and learning purposes only**.
Commercial use, redistribution, or re-branding as a personal portfolio is **strictly prohibited**.

---

## 📜 Credits

Developed and designed with ❤️ by **Dipsana Roy**

> “I built this portfolio to express both my technical foundation and my creative evolution.”
