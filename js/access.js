let isSpeaking = false;

document.getElementById('speak').addEventListener('click', function() {
    let text = document.querySelector('body').textContent;
    let utterance = new SpeechSynthesisUtterance(text);

    if (!isSpeaking) {
        window.speechSynthesis.speak(utterance);
        isSpeaking = true;
    } else {
        window.speechSynthesis.cancel();
        isSpeaking = false;
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id !== 'speak' && isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
    }
});

document.getElementById('reduce-motion-toggle').addEventListener('click', function() {
    document.body.classList.toggle('reduce-motion');
});

let autoScrolling;
let isAutoScrolling = false;

document.getElementById('auto-scroll-toggle').addEventListener('click', function() {
    if (!isAutoScrolling) {
        autoScrolling = setInterval(() => window.scrollBy(0, 1), 10);
        isAutoScrolling = true;
    } else {
        clearInterval(autoScrolling);
        isAutoScrolling = false;
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id !== 'auto-scroll-toggle' && isAutoScrolling) {
        clearInterval(autoScrolling);
        isAutoScrolling = false;
    }
});

document.getElementById('michigan-toggle').addEventListener('click', function() {
    document.body.classList.toggle('michigan');
});

function showHelp() {
    alert("Click on a news source below to show the news feed. Click on it again to remove!");
};