// ===============================
// EVENT HANDLING & INTERACTIVE FEATURES
// ===============================

// Feature 1: Toggle background color
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#f4f4f9" : "lightyellow";
});

// Feature 2: Counter functionality
let counter = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

// ===============================
// CUSTOM FORM VALIDATION
// ===============================
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission until validation passes

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Validation rules
  if (username === "") {
    formMessage.textContent = "Username cannot be empty.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters long.";
    formMessage.style.color = "red";
    return;
  }

  // If all validations pass
  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";

  // Reset form
  signupForm.reset();
});
