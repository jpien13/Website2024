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
    const clkRate = 10; // Base rate for CLK wire
    const inputDataRate = clkRate * 0.1; // Faster rate for data inputs to complete 90% in same time

    // Animate CLK wire
    currentAni(['.trail.color-7'], clkRate);

    // Animate data input wires
    currentAni([
        '.trail.color-1',
        '.trail.color-2',
        '.trail.color-3',
        '.trail.color-4',
        '.trail.color-5',
        '.trail.color-6'
    ], inputDataRate);
};
