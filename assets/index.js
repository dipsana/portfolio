console.log("index.js running...");
const texts = [
    "Full-stack Web Developer",
    "C Programmer",
    "MongoDB, Mongoose",
    "Express.js, React.js",
    "Node.js, REST APIs",
];
let textIndex = 0;
const typingTextElement = document.querySelector('#animated-skills');

// Function to trigger the typing animation
function displayText() {
    typingTextElement.style.width = '0';                                // Reset width to trigger the animation again
    typingTextElement.innerHTML = texts[textIndex] + '&nbsp; &nbsp;';   // Set the text to show
    typingTextElement.style.animation = 'none';                         // Remove any ongoing animation
    typingTextElement.style.animation = 'typing 4s steps(50) infinite alternate';
}

// Function to loop through the texts
function startTypingAnimation() {
    displayText();
    textIndex = (textIndex + 1) % texts.length; // Go to next text, loop back if at end
    setTimeout(startTypingAnimation, 8000);     // Wait 4 seconds before starting next text
}

window.onload = function() {
    startTypingAnimation(); // Typing Animation

    // Introduction text
    const text1 = document.querySelector('main #profile #text1');
    const text2 = document.querySelector('main #profile #text2');
    setTimeout(() => {
        text1.classList.add('show');
        setTimeout(() => {
            text2.classList.add('show');
        }, 1500);
    }, 500);
};