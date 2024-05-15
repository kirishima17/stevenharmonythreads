let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");

let emailInput = document.getElementById("email-input");

let phoneInput = document.getElementById("phone-input");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

let passwordInput = document.getElementById("password-input");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

let verifyPasswordInput = document.getElementById("verify-password-input");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");

let submitButton = document.getElementById("submit-button");

function validateInput(input, errorElement, isEmptyError, isValidCondition, emptyCondition = true) {
  if (!input.value.trim()) {
    isEmptyError.style.display = "block";
    errorElement.style.display = "none";
    input.classList.add("error");
    input.classList.remove("valid");
  } else if (!isValidCondition) {
    errorElement.style.display = "block";
    isEmptyError.style.display = "none";
    input.classList.add("error");
    input.classList.remove("valid");
  } else {
    errorElement.style.display = "none";
    isEmptyError.style.display = "none";
    input.classList.remove("error");
    input.classList.add("valid");
  }
}

firstNameInput.addEventListener("input", () => {
  validateInput(firstNameInput, firstNameError, emptyFirstNameError, /^[a-zA-Z ]+$/.test(firstNameInput.value));
});

lastNameInput.addEventListener("input", () => {
  validateInput(lastNameInput, lastNameError, emptyLastNameError, /^[a-zA-Z ]+$/.test(lastNameInput.value));
});

emailInput.addEventListener("input", () => {
  validateInput(emailInput, document.getElementById("email-error"), document.getElementById("empty-email"), /^\S+@\S+\.\S+$/.test(emailInput.value));
});

phoneInput.addEventListener("input", () => {
  validateInput(phoneInput, phoneError, emptyPhoneError, /^\d{12}$/.test(phoneInput.value));
});

passwordInput.addEventListener("input", () => {
  validateInput(passwordInput, passwordError, emptyPasswordError, passwordInput.value.length >= 8);
});

verifyPasswordInput.addEventListener("input", () => {
  validateInput(verifyPasswordInput, verifyPasswordError, emptyVerifyPasswordError, verifyPasswordInput.value === passwordInput.value);
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (document.querySelectorAll(".valid").length === 6) {
    console.log("Form is valid, submitting...");
  } else {
    console.log("Form is not valid, please correct the errors.");
  }
});
