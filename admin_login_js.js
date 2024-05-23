document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Mock login check
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        alert('Login successful!');
        // Redirect to admin dashboard or perform any other logic
        window.location.href = "admindashboard.html"; 
    } else {
        alert('Invalid email or password');
    }
});
