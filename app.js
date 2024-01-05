function currentAni(trailSelectors, rate) {
    trailSelectors.forEach(selector => {
        // Use querySelectorAll to handle multiple elements with the same class
        const trails = document.querySelectorAll(selector);

        trails.forEach(trail => {
            const pathLength = trail.getTotalLength();
            let visibleLength = 50; // Lit up length of current
            trail.style.strokeDasharray = `${visibleLength} ${pathLength - visibleLength}`;
            let dashOffset = 0;

            const speed = rate; // Speed of the animation

            function animate() {
                dashOffset -= speed; // Subtracting because negatives result in visually forward progression
                trail.style.strokeDashoffset = dashOffset;

                if (dashOffset <= -pathLength) { // Reset the animation once the current reaches the end of the wire
                    dashOffset = 0;
                }

                requestAnimationFrame(animate);
            }

            animate();
        });
    });
}

window.onload = function() {
    // Call currentAni for each set of trails
    currentAni([
        '.trail.color-1',
        '.trail.color-2',
        '.trail.color-3',
        '.trail.color-4',
        '.trail.color-5',
        '.trail.color-6',

    ], 1);

    // Call currentAni for color-7 trails which includes both paths
    currentAni([
        '.trail.color-7'
    ], 10);
};
