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



function setScrollbarBackgroundOnStick() {
    const scrollbar = document.querySelector('.menu-scrollbar-container');
    const stickyPoint = scrollbar.offsetTop; // Get the element's position relative to the top of the page

    if (window.scrollY >= stickyPoint) {
        // When the scrollbar sticks to the top
        scrollbar.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Set the desired background color
    } else {
        // When the scrollbar is not at the top
        scrollbar.style.backgroundColor = 'transparent'; // Reset to transparent
    }
}

// Attach the function to the scroll event
window.addEventListener('scroll', setScrollbarBackgroundOnStick);

// Call the function initially to set the correct background on page load
setScrollbarBackgroundOnStick();