
let userData = {};

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function signup() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    if (!name || !email || !password) {
        document.getElementById('signup-msg').innerHTML = 'Please fill all fields.';
        return;
    }

    if (userData[email]) {
        document.getElementById('signup-msg').innerHTML = 'Email already exists.';
    } else {
        userData[email] = { name: name, password: password };
        document.getElementById('signup-msg').innerHTML = 'Signup successful! Please login.';
        showLogin();
    }
}

function login() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if (!email || !password) {
        document.getElementById('login-msg').innerHTML = 'Please fill all fields.';
        return;
    }

    if (userData[email] && userData[email].password === password) {
        document.getElementById('login-msg').innerHTML = `Welcome, ${userData[email].name}!`;
    } else {
        document.getElementById('login-msg').innerHTML = 'Invalid email or password.';
    }
}
function signInWithGoogle() {
    alert('Google Sign In feature is not implemented yet.');
}
