

// JavaScript to hide the loader and show the main content
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const loader = document.getElementById("loader");
        const mainContent = document.getElementById("main-content");

        loader.classList.add("hidden");
        mainContent.classList.add("show");
    }, 6000);
});