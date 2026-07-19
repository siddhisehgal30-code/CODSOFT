const email = document.getElementById("first");
const password = document.getElementById("second");
const showPass = document.getElementById("show-pass");
const form = document.querySelector("form");

// Show Password

showPass.addEventListener("change", function () {
    if (showPass.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

// Login Validation

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if (emailValue === "") {
        alert("Email is required");
        return;
    }

    if (!emailValue.includes("@")) {
        alert("Enter a valid email");
        return;
    }

    if (passwordValue === "") {
        alert("Password is required");
        return;
    }

    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Login Successful!");
    window.location.href = "dashboard.html";

});