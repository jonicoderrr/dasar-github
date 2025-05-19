document.addEventListener('DOMContentLoaded', function() {
    // Load navbar partial
    fetch('./src/partials/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            initializeNavbar();
        })
        .catch(error => console.error('Error loading navbar:', error));
});

function initializeNavbar() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    hamburger.addEventListener('click', () => {
        // Toggle mobile menu
        mobileMenu.classList.toggle('hidden');
        
        // Toggle icons
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Menutup menu saat mengklik di luar navbar
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = event.target.closest('nav');
        if (!isClickInsideNavbar && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
} 