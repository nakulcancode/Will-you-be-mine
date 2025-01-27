function moveButton() {
    const noButton = document.getElementById('no');
    
    // Generate random position within viewport
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Apply new position
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// Add event listener to the no button
document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no');
    noButton.addEventListener('click', moveButton);  // Only move on click
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    const musicBtn = document.getElementById('musicControl');
    const musicIcon = musicBtn.querySelector('.music-icon');

    // Start muted (to comply with modern browser autoplay policies)
    music.muted = true;

    musicBtn.addEventListener('click', function() {
        if (music.muted) {
            music.muted = false;
            musicIcon.textContent = '🔊';
        } else {
            music.muted = true;
            musicIcon.textContent = '🔇';
        }
    });
}); 