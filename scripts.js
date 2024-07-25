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

// Define where you want to send the data.
const url = 'https://yourserver.com/api/contact'; // Change this URL to your actual endpoint

// Create an object to send in JSON format
const formData = {
    name: name,
    email: email,
    message: message
};

// Use fetch API to send the form data
fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json()) // or .text() if you expect a plain response
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
