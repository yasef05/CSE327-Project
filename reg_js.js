function toggleUserType() {
    const userType = document.getElementById('user-type').value;
    const patientFields = document.getElementById('patient-fields');
    const adminFields = document.getElementById('admin-fields');
    
    if (userType === 'patient') {
        patientFields.style.display = 'block';
        adminFields.style.display = 'none';
    } else if (userType === 'admin') {
        patientFields.style.display = 'none';
        adminFields.style.display = 'block';
    }
}

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    
    const userType = formData.get('user-type');
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    
    if (userType === 'patient') {
        const age = formData.get('age');
        const medicalHistory = formData.get('medical-history');
        console.log(`Patient Registration:\nName: ${name}\nEmail: ${email}\nPassword: ${password}\nAge: ${age}\nMedical History: ${medicalHistory}`);
    } else if (userType === 'admin') {
        const adminCode = formData.get('admin-code');
        console.log(`Admin Registration:\nName: ${name}\nEmail: ${email}\nPassword: ${password}\nAdmin Code: ${adminCode}`);
    }
    
    alert('Registration successful!');
    
});
