document.getElementById('add-event-form').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const eventName = document.getElementById('event-name').value.trim();
    const eventDate = document.getElementById('event-date').value.trim();
    const eventLocation = document.getElementById('event-location').value.trim();
    const eventImage = document.getElementById('event-image').files[0];

    if (eventName.length < 3) {
        alert('Event Name must be at least 3 characters long.');
        return;
    }

    if (!eventDate) {
        alert('Event Date is required.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const events = JSON.parse(localStorage.getItem('events')) || [];

        events.push({
            name: eventName,
            date: eventDate,
            location: eventLocation,
            image: e.target.result 
        });

        localStorage.setItem('events', JSON.stringify(events));

        alert('Event added successfully!');

        document.getElementById('add-event-form').reset();
    };

    reader.readAsDataURL(eventImage);
});
