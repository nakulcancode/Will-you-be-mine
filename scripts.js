document.addEventListener("DOMContentLoaded", () => {
    const flower = document.querySelector("#animation-flower");
    const word = document.querySelector("h1");
    const rainDrop = document.querySelector(".rain-drop");
    const music = document.getElementById('backgroundMusic');
    const musicBtn = document.getElementById('musicControl');
    const musicIcon = musicBtn.querySelector('.music-icon');

    // Set up music
    music.loop = true;
    music.volume = 0.5; // Set volume to 50%

    // Function to start playing music
    const playMusic = () => {
        music.play()
            .then(() => {
                musicIcon.textContent = '🔊';
                // Remove the click event listener after successful play
                document.removeEventListener('click', playMusic);
            })
            .catch(error => {
                console.log('Playback failed:', error);
            });
    };

    // Try to play immediately
    playMusic();

    // If autoplay fails, play on first user interaction with the page
    document.addEventListener('click', playMusic, { once: true });

    // Music button control
    musicBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering the document click handler
        if (music.paused) {
            music.play();
            musicIcon.textContent = '🔊';
        } else {
            music.pause();
            musicIcon.textContent = '🔇';
        }
    });

    setTimeout(() => {
      flower.style.display = "inherit";
      word.style.display = "none";
    }, 2000);
  });
  
  function createRaindrop() {
    const body = document.querySelector("body");
    const xPosition = Math.random() * window.innerWidth;
    const delay = Math.random() * 5;
    const duration = Math.random() * 2 + 2;
  
    const rainDrop = document.createElement("div");
    rainDrop.className = "rain";
    rainDrop.style.left = `${xPosition}px`;
    rainDrop.style.animationDelay = `${delay}s`;
    rainDrop.style.animationDuration = `${duration}s`;
    rainDrop.style.display = "none";
    body.appendChild(rainDrop);
  
    setTimeout(() => {
      rainDrop.style.display = "inherit";
    }, 800);
  }
  
  setInterval(createRaindrop, 100);
  
  document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    const musicBtn = document.getElementById('musicControl');
    const musicIcon = musicBtn.querySelector('.music-icon');

    // Add loop and preload attributes
    music.loop = true;
    music.preload = 'auto';

    // Log if audio file is loaded
    music.addEventListener('loadeddata', function() {
        console.log('Audio file loaded successfully');
    });

    // Log any errors
    music.addEventListener('error', function(e) {
        console.error('Error loading audio:', e);
        console.error('Error details:', music.error);
    });

    // Try to play immediately with error handling
    music.play().then(function() {
        console.log('Audio started playing');
        musicIcon.textContent = '🔊';
    }).catch(function(error) {
        console.log('Autoplay failed:', error);
        // We'll wait for user interaction
    });

    musicBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play().then(function() {
                musicIcon.textContent = '🔊';
                console.log('Audio started playing after click');
            }).catch(function(error) {
                console.error('Play failed after click:', error);
            });
        } else {
            music.pause();
            musicIcon.textContent = '🔇';
            console.log('Audio paused');
        }
    });
  });
  