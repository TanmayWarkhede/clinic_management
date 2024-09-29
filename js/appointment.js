document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reason = document.getElementById('reason').value;

    if (name && phone && date && time && reason) {
        fetch('http://localhost:5000/api/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                phone,
                lastVisit: new Date(date),
                reason,
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert(`Appointment confirmed for ${data.name} on ${date} at ${time}.\nReason: ${reason}`);
        })
        .catch(error => {
            alert('Error saving appointment.');
            console.error('Error:', error);
        });
    } else {
        alert('Please fill out all fields.');
    }
});
