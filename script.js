let scrollInterval;

function startScrolling(direction) {
    if (isTouchDevice()) return; // Disable button-based scrolling on touch devices
    const container = document.querySelector('.menu-scrollbar');
    scrollInterval = setInterval(() => {
        container.scrollBy({ left: direction * 3, behavior: 'auto' }); // Scroll 5px at a time
    }, 10); // Adjust the interval for smoother or faster scrolling
}

function stopScrolling() {
    clearInterval(scrollInterval); // Stop scrolling when the cursor leaves the button
}

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}



let stickyPoint = null;

window.addEventListener('DOMContentLoaded', () => {
    const savedStickyPoint = localStorage.getItem('stickyPoint');
    if (savedStickyPoint !== null) {
        stickyPoint = parseInt(savedStickyPoint, 10);
    } else {
        updateStickyPoint(); // Only calculate if not stored
    }
    setScrollbarBackgroundOnStick();
});

function updateStickyPoint() {
    const scrollbar = document.querySelector('.menu-scrollbar-container');
    if (!scrollbar) return;
    stickyPoint = scrollbar.offsetTop;
    localStorage.setItem('stickyPoint', stickyPoint); // Save to localStorage
    setScrollbarBackgroundOnStick();
}

function setScrollbarBackgroundOnStick() {
    const scrollbar = document.querySelector('.menu-scrollbar-container');
    if (!scrollbar || stickyPoint === null) return;
    const isScrolled = window.scrollY >= stickyPoint;

    if (isScrolled) {
        scrollbar.classList.add('sticky-bg');
    } else {
        scrollbar.classList.remove('sticky-bg');
    }
}

// Update stickyPoint on load and resize
window.addEventListener('resize', updateStickyPoint);

// Attach the function to the scroll event
window.addEventListener('scroll', setScrollbarBackgroundOnStick);

// Call the function initially to set the correct background on page load
setScrollbarBackgroundOnStick();

// Opzione 2 per video 

// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.getElementById('promoVideo');
//     const playBtn = document.getElementById('playButton');
//     console.log('Button:', playBtn); // Add this line
//     if (video && playBtn) {
//         playBtn.addEventListener('click', function() {
//             video.play();
//             console.log('Video is playing');
//             playBtn.style.display = 'none';
//         });
//         video.addEventListener('pause', function() {
//             playBtn.style.display = '';
//         });
//         video.addEventListener('play', function() {
//             playBtn.style.display = 'none';
//         });
//     }
// });