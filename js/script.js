function validateForm() {
    // Get the form fields
    var name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;

    // Regular expression for name (only alphabets and at least 3 characters)
    var nameRegex = /^[A-Za-z]{3,}$/;
    
    // Regular expression for email (standard email format)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name
    if (!nameRegex.test(name)) {
        alert("Name must be at least 3 characters long and contain only alphabets.");
        return false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If validation is successful
    alert("Form Submitted Successfully!");
    return true;
}
