function animateCurrent(wireId, currentId, trailId, duration) {
    var wire = document.getElementById(wireId);
    var current = document.getElementById(currentId);
    var trail = document.getElementById(trailId);
    var wireLength = wire.getTotalLength();
    var startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsedTime = (timestamp - startTime) / 1000; // Convert to seconds
        var progress = elapsedTime / duration;

        if (progress > 1) progress = 1; // Ensure progress doesn't exceed 1

        var point = wire.getPointAtLength(progress * wireLength);
        current.setAttribute('cx', point.x);
        current.setAttribute('cy', point.y);

        // Update the trail to match the current's position
        var currentPos = progress * wireLength;
        trail.setAttribute('stroke-dasharray', `${currentPos} ${wireLength}`);
        trail.setAttribute('stroke-dashoffset', 0);

        if (progress < 1) {
            requestAnimationFrame(step); // Continue the animation
        }
    }

    requestAnimationFrame(step);
}

window.onload = function() {
    animateCurrent('wire1', 'current1', 'trail1', 5); // Animate the first wire
    animateCurrent('wire2', 'current2', 'trail2', 5); // Animate the second wire
};
