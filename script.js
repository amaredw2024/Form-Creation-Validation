document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 2: Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Step 3: Retrieve user inputs and trim them
        const usernameInput = document.getElementById('username').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        // Step 4: Initialize validation variables
        let isValid = true;
        const messages = [];

        // Step 5: Validate username
        if (usernameInput.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Step 6: Validate email
        if (!emailInput.includes('@') || !emailInput.includes('.')) {
            isValid = false;
            messages.push("Email must be valid (e.g., user@example.com).");
        }

        // Step 7: Validate password
        if (passwordInput.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 8: Display feedback
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    });
});