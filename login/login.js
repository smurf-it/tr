
// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manage user state
onAuthStateChanged(auth, user => {
    if (user) {
        // User is signed in
        document.getElementById('logoutButton').style.display = 'inline';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'none';
    } else {
        // No user is signed in
        document.getElementById('logoutButton').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    }
});

// Login function
document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = '../index.html'; // Redirect to index.html
        })
        .catch(error => alert(error.message));
});

// Registration function
document.getElementById('registerButton').addEventListener('click', () => {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = 'index.html'; // Redirect to index.html
        })
        .catch(error => alert(error.message));
});

// Logout function
document.getElementById('logoutButton').addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            window.location.href = 'login.html'; // Redirect to login.html
        })
        .catch(error => alert(error.message));
});

// Show register form
document.getElementById('showRegister').addEventListener('click', () => {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

// Show login form
document.getElementById('showLogin').addEventListener('click', () => {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});
