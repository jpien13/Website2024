window.onload = function() {
    // Get the SVG elements for the wire, current (circle), and trail
    var wire = document.getElementById('wire');
    var current = document.getElementById('current');
    var trail = document.getElementById('trail');

    // Set the duration of the animation
    var animationDuration = 2; // in seconds

    // Start the current animation after 1 second
    setTimeout(function() {
        // Set the initial position of the current (circle) off the screen to the left
        current.setAttribute('cx', '-10');

        // Apply the animation to the current (circle)
        current.style.animation = `move-current ${animationDuration}s linear forwards`;

        // Animate the blue trail to expand along the wire
        trail.style.strokeDashoffset = '0';
        trail.style.transition = `stroke-dashoffset ${animationDuration}s linear`;
    }, 1000);
};
