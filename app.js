$(document).ready(function () {
    // Smooth scrolling for anchor links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });

            // Close navigation menu on click (for mobile)
            var navbarNav = document.getElementById('navbarNav');
            navbarNav.classList.remove('active');
        }
    });

    // Animation for home content
    const homeContent = document.querySelector(".home-content");

    if (homeContent) {
        homeContent.classList.add("animate-in");
    }

    // Toggle navigation menu
    function toggleNav(){
        var navbarNav = document.getElementById('navbarNav');
        navbarNav.classList.toggle('active');
    }

    // Your existing toggle button code
    $(".toggle-btn").on('click', function () {
        toggleNav();
    });

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });
});

