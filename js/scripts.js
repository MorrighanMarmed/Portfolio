window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }

        // Get the logo element
        const logo = document.querySelector('.navbar-brand img');

        // Check if the navbar toggler is active
        const navbarToggler = document.querySelector('.navbar-toggler');
        const isNavbarTogglerActive = navbarToggler.getAttribute('aria-expanded') === 'true';

        if (window.scrollY === 0 && !isNavbarTogglerActive) {
            // Scroll is at top and navbar toggler is not active, use the white logo
            navbarCollapsible.classList.remove('navbar-shrink');
            logo.src = '../Portfolio/images/signaturewhite.png'; 
        } else {
            // Scroll is not at top or navbar toggler is active, use the black logo
            navbarCollapsible.classList.add('navbar-shrink');
            logo.src = '../Portfolio/images/signature.png'; 
        }
    };

    // Initialize navbar state
    navbarShrink();

    // Listen for scroll events and update navbar state
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when menu item is clicked
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));
    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click(); // Close the navbar toggler when a menu item is clicked
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio-logos a.portfolio-box, #portfolio-brochures a.portfolio-box, #portfolio-photography a.portfolio-box'
    });
    

});
