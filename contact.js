document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = form.name;
  const emailInput = form.email;
  const messageInput = form.message;
  const successMessage = form.querySelector(".success-message");

  // Show error message for input
  function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add("error");
    const errorEl = formGroup.querySelector(".error-message");
    errorEl.textContent = message;
  }

  // Clear error message for input
  function clearError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("error");
    const errorEl = formGroup.querySelector(".error-message");
    errorEl.textContent = "";
  }

  // Simple email validation
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset success message
    successMessage.textContent = "";

    let isFormValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required.");
      isFormValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      showError(emailInput, "Email is required.");
      isFormValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email.");
      isFormValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, "Message cannot be empty.");
      isFormValid = false;
    } else {
      clearError(messageInput);
    }

    // If all validations pass
    if (isFormValid) {
      successMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";

      // Clear form fields
      form.reset();

      // Remove any lingering errors
      [nameInput, emailInput, messageInput].forEach(clearError);
    }
  });
});
