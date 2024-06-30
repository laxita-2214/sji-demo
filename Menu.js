function menu() {
    var child = document.querySelector('.mobile_navigation');

    child.classList.toggle("show");
}
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.contact_button').forEach(button => {
    button.addEventListener('click', scrollToContact);
});

function validateForm() {
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.getElementById('success-message').style.display = 'none';

    // Get form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contact-number").value;
    var message = document.getElementById("message").value;

    console.log(name);

    // Regular expression for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for contact number validation (digits only, you can modify this based on your requirements)
    var contactNumberPattern = /^\d+$/;

    // Validate name
    var valid = true;
    if (name === "") {
        document.getElementById("name-error").textContent = "Name field required";
        valid = false;
    }

    // Validate email
    if (email === "") {
        document.getElementById("email-error").textContent = "Email field required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address";
        valid = false;
    }

    // Validate contact number
    if (contactNumber === "") {
        document.getElementById("contact-error").textContent = "Contact number field required";
        valid = false;
    } else if (!contactNumberPattern.test(contactNumber) || contactNumber.length !== 10) {
        document.getElementById("contact-error").textContent = "Please enter a valid 10-digit contact number";
        valid = false;
    }

    // Validate message
    if (message === "") {
        document.getElementById("message-error").textContent = "Message field required";
        valid = false;
    }

    // If all validations pass, show success message
    if (valid) {
        var successMessage = document.getElementById('success-message');
        successMessage.textContent = "Form submitted successfully!";
        successMessage.style.display = 'block';
        successMessage.style.backgroundColor = 'green';
        successMessage.style.color = 'white';
        successMessage.style.padding = '10px';
        successMessage.style.borderRadius = '5px';
        successMessage.style.marginBottom = '20px';
    }

    return valid;
}