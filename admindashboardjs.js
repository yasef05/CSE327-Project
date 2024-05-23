document.addEventListener('DOMContentLoaded', () => {
    // Show the default section
    showSection('patients');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function addPatient() {
    const patientName = prompt("Enter patient's name:");
    if (patientName) {
        const patientList = document.getElementById('patients-list');
        const newPatient = document.createElement('div');
        newPatient.textContent = patientName;
        patientList.appendChild(newPatient);
    }
}

function scheduleAppointment() {
    const appointmentDetails = prompt("Enter appointment details:");
    if (appointmentDetails) {
        const appointmentList = document.getElementById('appointments-list');
        const newAppointment = document.createElement('div');
        newAppointment.textContent = appointmentDetails;
        appointmentList.appendChild(newAppointment);
    }
}

function addDoctor() {
    const doctorName = prompt("Enter doctor's name:");
    const doctorDepartment = prompt("Enter doctor's department:");
    const doctorAge = prompt("Enter doctor's age:");

    if (doctorName && doctorDepartment && doctorAge) {
        const doctorList = document.getElementById('doctors-list');
        const newDoctor = document.createElement('div');
        newDoctor.innerHTML = `<strong>Name:</strong> ${doctorName}<br>
                               <strong>Department:</strong> ${doctorDepartment}<br>
                               <strong>Age:</strong> ${doctorAge}`;
        doctorList.appendChild(newDoctor);
    } else {
        alert("All fields are required.");
    }
}

function generateReport() {
    const reportDetails = prompt("Enter report details:");
    if (reportDetails) {
        const reportList = document.getElementById('reports-list');
        const newReport = document.createElement('div');
        newReport.textContent = reportDetails;
        reportList.appendChild(newReport);
    }
}
