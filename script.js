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



function updateBarColor() {
    const scrollPosition = window.scrollY; // Get the current scroll position
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = scrollPosition / documentHeight; // Calculate the scroll percentage

    // Add an offset to the scroll percentage
    const offset = 0.1; // Adjust this value to control the offset
    const adjustedScrollPercentage = Math.max(scrollPercentage - offset, 0);
    
    // Define the gradient colors (top to bottom)
    const topColor = [0, 0, 0]; // Black (RGB)
    const bottomColor = [74, 56, 50]; // #4a3832 (RGB)

    // Interpolate between the top and bottom colors based on scroll percentage
    const r = Math.round(topColor[0] + (bottomColor[0] - topColor[0]) * scrollPercentage);
    const g = Math.round(topColor[1] + (bottomColor[1] - topColor[1]) * scrollPercentage);
    const b = Math.round(topColor[2] + (bottomColor[2] - topColor[2]) * scrollPercentage);

    // Apply the calculated color to the bar
    const bar = document.querySelector('.menu-scrollbar-container');
    bar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Attach the function to the scroll event
window.addEventListener('scroll', updateBarColor);

// Call the function initially to set the color on page load
updateBarColor();