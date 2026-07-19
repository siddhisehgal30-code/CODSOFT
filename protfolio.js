// Typing Effect
const text = "Frontend Developer";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();


// Contact Form Validation
const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
    } else {
        alert("Message Sent Successfully!");
        form.reset();
    }
});


// Dark / Light Mode
const btn = document.getElementById("theme-btn");

btn.onclick = function() {
    document.body.classList.toggle("light-mode");
};


// Scroll To Top Button
document.getElementById("topBtn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};