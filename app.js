function animateTrail(wireSelector, trailSelector, duration, onFadeComplete) {
    const wire = document.querySelector(wireSelector);
    const trail = document.querySelector(trailSelector);
    const trailLen = trail.getTotalLength();
    let decreaseStep = duration;

    function animate() {
        trailLen -= decreaseStep;
        let dashArrayValue
    }

    

    requestAnimationFrame(step);
}

let wire1Extended = false;
let wire2Extended = false;

function checkAndStartOutputWireFade() {
    if (wire1Extended && wire2Extended) {
        animateTrail('.wire.output', '.trail.color-1.output', 5, null);
    }
}

window.onload = function() {
    animateTrail('.wire:not(.output)', '.trail.color-1', 10, () => {
        wire1Extended = true;
        checkAndStartOutputWireFade();
    });

    animateTrail('.wire:not(.output)', '.trail.color-2', 10, () => {
        wire2Extended = true;
        checkAndStartOutputWireFade();
    });
};
