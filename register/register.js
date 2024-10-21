// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDFHafa4F9JOk99TyS3Ob78HEmW5wXOOb0",
    authDomain: "tiptracker-e2e9a.firebaseapp.com",
    projectId: "tiptracker-e2e9a",
    storageBucket: "tiptracker-e2e9a.appspot.com",
    messagingSenderId: "326366703466",
    appId: "1:326366703466:web:b974ba09c22f9e71e3ff13",
    measurementId: "G-4NWQRC0PBR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Registration function
document.getElementById('registerButton').addEventListener('click', () => {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Validate inputs
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Registration successful! You can now log in.');
            window.location.href = '../login/login.html'; // Redirect to login page
        })
        .catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error (${errorCode}): ${errorMessage}`);
        });
});

// Show login form
document.getElementById('showLogin').addEventListener('click', () => {
    window.location.href = '../../login/login.html'; // Redirect to login page
});
