function currentAni(trailSelector) {
    const trail = document.querySelector(trailSelector);
    const pathLength = trail.getTotalLength();

    let visibleLength = 30; // Lit up length of current
    //strokeDasharray has 2 parrameters (dash length) (gap length)
    trail.style.strokeDasharray = `${visibleLength} ${pathLength - visibleLength}`;
    let dashOffset = 0;

    const speed = 1; // Speed of the animation

    function animate() {
        dashOffset -= speed; //subtracting cuz negatives reults in visually forward progression
        trail.style.strokeDashoffset = dashOffset;
        
        // Reset the animation once the current reaches the end of the wire
        if (dashOffset <= -pathLength) {
            dashOffset = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

window.onload = function() {
    currentAni('.trail.color-1');
};
