const form = document.querySelector("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const agreeTerm = document.getElementById("agreeTerm");

/* =========================
   FORM SUBMIT EVENT
========================= */

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default submission

    // Basic validations
    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone.value)) {
        alert("Phone number must be 11 digits.");
        return;
    }

    if (!validatePassword(password.value)) {
        alert("Password must be at least 8 characters, include uppercase, number and special character.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return;
    }

    if (!agreeTerm.checked) {
        alert("You must agree to the Terms & Conditions.");
        return;
    }

    // If everything is valid
    alert("Account created successfully 🎉");

    form.reset();
});


/*  VALIDATION FUNCTIONS */

// Email Validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Nigerian Phone Validation (11 digits)
function validatePhone(phone) {
    const regex = /^[0-9]{11}$/;
    return regex.test(phone);
}

// Strong Password Validation
function validatePassword(password) {
    const regex =
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
}