// 1. Character Counter for Address Field
const addressInput = document.getElementById("address");
const charCount = document.getElementById("count");

addressInput.addEventListener("input", function() {
    let count = addressInput.value.length;
    charCount.textContent = count + " Characters";
});

// 2. Clear Form Button Logic
const clearBtn = document.getElementById("clearBtn");
const form = document.getElementById("internshipForm");

clearBtn.addEventListener("click", function() {
    form.reset();
    charCount.textContent = "0 Characters";
    
    // Clear and hide all error messages
    document.querySelectorAll('.error-msg').forEach(error => {
        error.textContent = "";
        error.style.display = 'none';
    });
});

// 3. Form Validation and Submit Logic
form.addEventListener("submit", function(event) {
    // Prevent the form from automatically reloading the page
    event.preventDefault();

    // HTML Inputs
    const roll = document.getElementById("roll");
    const student = document.getElementById("student");
    const father = document.getElementById("father");
    const company = document.getElementById("company");
    const address = document.getElementById("address");
    const date1 = document.getElementById("startdate1");
    const date2 = document.getElementById("startdate2");
    const declaration = document.getElementById("declaration");

    // HTML Error Divs
    const rollError = document.getElementById("rollerror");
    const studentError = document.getElementById("studenterror");
    const fatherError = document.getElementById("fathererror");
    const companyError = document.getElementById("companyerror");
    const addressError = document.getElementById("addresserror");
    const date1Error = document.getElementById("date1error");
    const date2Error = document.getElementById("date2error");
    const checkError = document.getElementById("checkerror");

    let isValid = true;

    // Roll Number Validation
    if (roll.value.trim() === "") {
        rollError.textContent = "Roll number is required!";
        rollError.style.display = "block";
        isValid = false;
    } else { rollError.style.display = "none"; }

    // Student Name Validation
    if (student.value.trim() === "") {
        studentError.textContent = "Student name cannot be empty!";
        studentError.style.display = "block";
        isValid = false;
    } else { studentError.style.display = "none"; }

    // Father Name Validation
    if (father.value.trim() === "") {
        fatherError.textContent = "Father's name is required!";
        fatherError.style.display = "block";
        isValid = false;
    } else { fatherError.style.display = "none"; }

    // Company Name Validation
    if (company.value.trim() === "") {
        companyError.textContent = "Company name is required!";
        companyError.style.display = "block";
        isValid = false;
    } else { companyError.style.display = "none"; }

    // Address Validation
    if (address.value.trim() === "") {
        addressError.textContent = "Company address is required!";
        addressError.style.display = "block";
        isValid = false;
    } else { addressError.style.display = "none"; }

    // Date 1 Validation
    if (date1.value === "") {
        date1Error.textContent = "Please select a valid date!";
        date1Error.style.display = "block";
        isValid = false;
    } else { date1Error.style.display = "none"; }

    // Date 2 Validation
    if (date2.value === "") {
        date2Error.textContent = "Please select a valid date!";
        date2Error.style.display = "block";
        isValid = false;
    } else { date2Error.style.display = "none"; }

    // Checkbox Validation
    if (!declaration.checked) {
        checkError.textContent = "You must check the declaration box to submit!";
        checkError.style.display = "block";
        isValid = false;
    } else { checkError.style.display = "none"; }

    // If everything is valid, submit to Formspree
    if (isValid) {
        alert("Success! Your Internship Form is being submitted.");
        this.submit(); 
    }
});