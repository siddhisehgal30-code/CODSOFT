
document.getElementById("submitBtn").addEventListener("click", function(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || phone === "" || message === ""){
        alert("⚠ Please fill all fields");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("❌ Please enter a valid email address");
        return;
    }

    if(phone.length !== 10 || isNaN(phone)){
        alert("❌ Phone number must contain exactly 10 digits");
        return;
    }

    document.getElementById("successMsg").innerText =
"✅ Message Sent Successfully! Thank you for contacting Job Portal.";

// Form Clear
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("phone").value = "";
document.getElementById("message").value = "";
});

let applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Application Submitted Successfully!");
    });
});

let search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    document.querySelectorAll(".job-card").forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
});
// --- THEME TOGGLE WITH LOCAL STORAGE ---
let themeBtn = document.getElementById("themeBtn");

// 1. Page load hote hi check karo ki kya pehle se light-mode save hai
document.addEventListener("DOMContentLoaded", function() {
    let savedTheme = localStorage.getItem("siteTheme");
    
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeBtn.innerText = "🌞 Light Mode";
    } else {
        document.body.classList.remove("light-mode");
        themeBtn.innerText = "🌙 Dark Mode";
    }
});

// 2. Button click hone par toggle aur save dono hoga
themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerText = "🌞 Light Mode";
        localStorage.setItem("siteTheme", "light"); // Browser mein save kiya
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
        localStorage.setItem("siteTheme", "dark");  // Browser mein save kiya
    }
});

let topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(){
    alert("Login Feature Coming Soon!");
});

// Live Date & Time

function updateDateTime(){

    let now = new Date();

    document.getElementById("dateTime").innerText =
    now.toLocaleString();

}

setInterval(updateDateTime,1000);

updateDateTime();


// Apply Count

let count = 0;

document.querySelectorAll(".apply-btn").forEach(button => {

    button.addEventListener("click", function(){

        count++;

        document.getElementById("applyCount").innerText = count;

    });

});

