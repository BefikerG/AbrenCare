

// JavaScript to hide the loader and show the main content
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Delay for the loader to display before hiding
    setTimeout(function() {
        // Fade out loader
        loader.classList.add("animate-fadeOut");

        // Fade in main content after loader fades out
        setTimeout(function() {
            loader.style.display = "none"; // Ensure loader is hidden after fade out
            mainContent.classList.remove("opacity-0"); // Remove initial opacity
            mainContent.classList.add("animate-fadeIn");
        }, 1000); // Duration of the fade-out animation
    }, 3000); // Adjust the timeout duration as needed
})

