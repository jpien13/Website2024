function animateCurrent(wireSelector, currentSelector, trailSelector, duration) {
    var wires = document.querySelectorAll(wireSelector);
    var currents = document.querySelectorAll(currentSelector);
    var trails = document.querySelectorAll(trailSelector);

    wires.forEach((wire, index) => {
        var wireLength = wire.getTotalLength();
        var current = currents[index];
        var trail = trails[index];
        var startTime = null;

        function updateRadius(progress) {
            return 10 * (1 - progress);
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var elapsedTime = (timestamp - startTime) / 1000;
            var progress = elapsedTime / duration;

            if (progress > 1) progress = 1;

            var point = wire.getPointAtLength(progress * wireLength);
            current.setAttribute('cx', point.x);
            current.setAttribute('cy', point.y);
            current.setAttribute('r', updateRadius(progress));

            var currentPos = progress * wireLength;
            trail.setAttribute('stroke-dasharray', `${currentPos} ${wireLength}`);
            trail.setAttribute('stroke-dashoffset', 0);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    });
}

window.onload = function() {
    animateCurrent('.wire.color-1', '.current.color-1', '.trail.color-1', 5);
    animateCurrent('.wire.color-2', '.current.color-2', '.trail.color-2', 5);
};
