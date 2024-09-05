// Script to dynamically change the subtitle after a delay
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.sub-title').textContent = "We hope all your wishes come true!";
    }, 5000); // Changes the message after 5 seconds
});
