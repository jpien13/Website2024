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

function animateText() {
    const targetText = "Hello I'm Jason.";
    let randomText = Array(targetText.length).fill('0').join('');
    const textElement = document.querySelector('#animated-text');
    textElement.textContent = randomText;

    let index = 0;
    function updateText() {
        let newText = '';
        for (let i = 0; i < targetText.length; i++) {
            if (i < index) {
                newText += targetText[i];
            } else {
                newText += Math.random() < 0.5 ? '1' : '0';
            }
        }
        textElement.textContent = newText;

        if (index < targetText.length) {
            index++;
            setTimeout(updateText, 50); // Adjust time for character change speed
        } else {
            setTimeout(() => {
                index = 0;
                updateText();
            }, 10000); // Delay before restarting
        }
    }

    updateText();
}


window.onload = function () {
    
    animateText();


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

