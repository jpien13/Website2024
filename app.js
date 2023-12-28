function animateCurrent(wire, currentSelector, trailSelector, duration) {
    var current = document.querySelector(currentSelector);
    var trail = document.querySelector(trailSelector);
    var wireLength = wire.getTotalLength();
    var startTime = null;

    function updateRadius(progress) {
        return 10 * (1 - progress); // Radius will be 10 at start and 0 at end
    }

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsedTime = (timestamp - startTime) / 1000;
        var progress = elapsedTime / duration;

        if (progress > 1) {
            // Reset to start the animation again
            startTime = null;
            progress = 0;
        }

        var point = wire.getPointAtLength(progress * wireLength);
        current.setAttribute('cx', point.x);
        current.setAttribute('cy', point.y);
        current.setAttribute('r', updateRadius(progress));

        var currentPos = progress * wireLength;
        trail.setAttribute('stroke-dasharray', `${currentPos} ${wireLength}`);
        trail.setAttribute('stroke-dashoffset', 0);

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

window.onload = function() {
    var wires = document.querySelectorAll('.wire');
    wires.forEach((wire, index) => {
        animateCurrent(wire, `.current.color-${index + 1}`, `.trail.color-${index + 1}`, 5);
    });
};
