const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

const signUpForm = document.querySelector(".sign-up-form");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const username = signUpForm.querySelector('input[type="text"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    if (localStorage.getItem(username) !== null) {
        alert("Username already taken. Please choose a different username.");
    } else {
        localStorage.setItem(username, password);
        alert("Signup successful! You can now log in with your credentials.");
    }
});

const signInForm = document.querySelector(".sign-in-form");
signInForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    const savedPassword = localStorage.getItem(username);

    if (savedPassword === password) {
        window.location.href = "indexs.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
