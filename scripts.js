document.addEventListener('DOMContentLoaded', function() {
    // Setup smooth scrolling for internal links
    setupSmoothScrolling();
    // Setup toggling for service descriptions
    toggleServiceDescriptions();
});

function setupSmoothScrolling() {
    document.querySelectorAll('a.nav-link, .dropdown-item').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            // Proceed only if it's an internal link
            if (targetId.startsWith('#')) {
                e.preventDefault();  // Prevent default link behavior
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Scroll smoothly to the target element
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,  // Adjust for navbar height
                        behavior: "smooth"
                    });
                } else {
                    console.error('No element found for ID:', targetId);
                }
            }
        });
    });
}

function toggleServiceDescriptions() {
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            document.querySelectorAll('.service-description').forEach(description => {
                if (description.id === serviceId) {
                    // Toggle visibility of the corresponding service description
                    description.style.display = description.style.display === 'block' ? 'none' : 'block';
                } else {
                    // Hide all other descriptions
                    description.style.display = 'none';
                }
            });
        });
    });
}

