document.addEventListener('DOMContentLoaded', function() {
    // Select only relevant links for smooth scrolling
    document.querySelectorAll('a.nav-link, .dropdown-item').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            // Check if the href attribute starts with '#'
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Prevent default only if it's an internal link
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // Adjust for navbar height
                        behavior: "smooth"
                    });
                } else {
                    console.error('No element found for ID:', targetId);
                }
            }
            // If not starting with '#', do nothing special (let external links work normally)
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

    // Form validation and data submission
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
        } else {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Thank you, ${name}. We have received your message and will get back to you shortly!`);
            form.reset();
            form.classList.remove('was-validated');

            // Define where you want to send the data.
            const url = 'https://yourserver.com/api/contact';

            // Use fetch API to send the form data
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });
});