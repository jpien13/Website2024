window.addEventListener('load', function() {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main');
    const skipButton = document.getElementById('skip-button');

    const hideSplashScreen = function() {
        splash.style.display = 'none'; // Hide splash screen
        mainContent.style.opacity = 1;  // Show main content
    };

    // Set timeout to hide splash screen after 3 seconds
    setTimeout(hideSplashScreen, 3000);

    // Add event listener to skip button
    skipButton.addEventListener('click', hideSplashScreen);
});
