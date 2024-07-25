document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle service descriptions
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            document.querySelectorAll('.service-description').forEach(description => {
                if (description.id === serviceId) {
                    description.style.display = description.style.display === 'block' ? 'none' : 'block';
                } else {
                    description.style.display = 'none';
                }
            });
        });
    });

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Thank you, ${name}. We have received your message and will get back to you shortly!`);
        }
        form.classList.add('was-validated');
    }, false);
});