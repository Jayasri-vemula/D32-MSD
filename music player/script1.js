// LOGIN FORM VALIDATION
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email && password) {
        alert("Login successful! 🎶");
        // Redirect to music player page
        window.location.href = "musicplayer.html";
    } else {
        alert("Please fill in all fields.");
    }
});

// SIGNUP FORM VALIDATION
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Account created successfully! 🎧");
    window.location.href = "login.html";
});
