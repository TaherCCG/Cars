/* jshint esversion: 11 */

/* playSound function is exported from sound-feature.js */

/* Function to set up event listeners for the main page buttons */
function setupEventListeners() {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const playMode1 = document.getElementById('playMode1');
    const playMode2 = document.getElementById('playMode2');
    /* Function to play sound when hovering over the card or clicking on the play buttons */
    if (card1 && card2 && playMode1 && playMode2) {
        // Hover effect for card1 and card2
        card1.addEventListener('mouseenter', function () {
            this.querySelector('.mode1').style.display = 'block';
            playSound("sound1");
        });
        card1.addEventListener('mouseleave', function () {
            this.querySelector('.mode1').style.display = 'none';
        });
        card2.addEventListener('mouseenter', function () {
            this.querySelector('.mode2').style.display = 'block';
            playSound("sound1");
        });
        card2.addEventListener('mouseleave', function () {
            this.querySelector('.mode2').style.display = 'none';
        });
        /* Click event for playMode1 and playMode2 buttons to navigate to the respective game modes after playing a sound effect */
        playMode1.addEventListener('click', function () {
            playSound("sound2");
            setTimeout(() => {
                window.location.href = "mode1.html";
            }, 1000);
        });
        playMode2.addEventListener('click', function () {
            playSound("sound2");
            setTimeout(() => {
                window.location.href = "mode2.html";
            }, 1000);
        });
    }
}
/* Call setupEventListeners when DOM is ready */
document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
});
// Export the functions for testing
module.exports = { setupEventListeners };
