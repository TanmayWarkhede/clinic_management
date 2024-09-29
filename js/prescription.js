document.addEventListener('DOMContentLoaded', () => {
    // Fetch prescriptions from backend
    fetch('http://localhost:5000/api/prescriptions')
        .then(response => response.json())
        .then(prescriptions => {
            const prescriptionEntries = document.getElementById('prescriptionEntries');
            prescriptions.forEach(prescription => {
                prescriptionEntries.innerHTML += createPrescriptionHTML(prescription);
            });
        })
        .catch(error => console.error('Error fetching prescriptions:', error));

    function createPrescriptionHTML(prescription) {
        return `
            <div class="prescription-entry">
                <h4>${prescription.patientName}</h4>
                <p><strong>Medication:</strong> ${prescription.medication}</p>
                <p><strong>Dosage:</strong> ${prescription.dosage}</p>
                <p><strong>Instructions:</strong> ${prescription.instructions}</p>
            </div>
        `;
    }
});
