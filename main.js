// HTML elements
let levelSpan = document.querySelector('.message .level');
let secondsSpan = document.querySelector('.message .seconds');
let start = document.querySelector('.start');
let theWord = document.querySelector('.the-word');
let input = document.querySelector('.input');
let upcomingWords = document.querySelector('.upcoming-words');
let timeLeftSpan = document.querySelector('.control .time>span');
let scoreGot = document.querySelector('.control .score>.got');
let scoreTotal = document.querySelector('.control .score>.total');
let finishMessage = document.querySelector('.finish');

// Game levels 
let levels = {
    'easy': 5,
    'normal': 3,
    'hard': 2,
};

let defaultLevelName = 'easy';
let defaultLevelSeconds = levels[defaultLevelName];

// Add the values to the elements
levelSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;


// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];


// Add the scoreTolal value
scoreTotal.innerHTML = words.length


// Disable paste in the input
input.onpaste = _ => false;

start.onclick = function () {
    // Remove the start button
    this.remove();
    input.focus();
    // Generate a random word into theWord and the rest words in the upcomingWords 
    generateWords()
}

function generateWords() {
    let randomIndex = Math.floor(Math.random() * words.length);
    theWord.innerHTML = words[randomIndex];
    // Remove the word from words
    words.splice(randomIndex, 1);
    // Make upcomingWords empty 
    upcomingWords.innerHTML = ""
    // Generate words inside upcomingWords
    words.forEach(word => {
        let div = document.createElement('div');
        let divText = document.createTextNode(word);
        div.appendChild(divText);
        upcomingWords.appendChild(div);
    })

    startPlay()
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        timeLeftSpan.innerHTML
        if (timeLeftSpan.innerHTML === '0') {
            // Stop timer
            clearInterval(start);

            // Compare the words 
            if (input.value.toLowerCase() === theWord.innerHTML.toLocaleLowerCase()) {
                // Incerase the score
                scoreGot.innerHTML++
                // if there is no words
                if (words.length > 0) {
                    // Make input field empty
                    input.value = '';
                    generateWords();
                } else {
                    // Display Conrgats Message
                    displayFinishMessage('Congrats', 'good');
                }
            } else {
                // Display Game Over Message 
                displayFinishMessage('Game Over', 'bad');
            }
        }
    }, 1000)
}

function displayFinishMessage(txt, className) {
    let span = document.createElement('span');
    let spanTxt = document.createTextNode(txt);
    span.className = className;
    span.appendChild(spanTxt);
    finishMessage.appendChild(span);
}