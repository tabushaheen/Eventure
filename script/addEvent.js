import { addNewEvent } from './events.js';

document.getElementById('add-event-form').addEventListener('submit', function (e) {
    e.preventDefault();
});

document.getElementById('add-event-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value.trim();
    const eventDate = document.getElementById('event-date').value.trim();
    const eventLocation = document.getElementById('event-location').value.trim();
    const eventLink = document.getElementById('event-link').value.trim();
    const eventImage = document.getElementById('event-image').files[0];

    if (eventName.length < 3) {
        alert('Event Name must be at least 3 characters long.');
        return;
    }
    
    if (!eventDate) {
        alert('Event Date is required.');
        return;
    }

    if (!eventImage) {
        alert('Please select an event image (JPG or PNG).');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const newEvent = {
            name: eventName,
            date: eventDate,
            location: eventLocation,
            link: eventLink,
            image: e.target.result
        };

        addNewEvent(newEvent);

        alert('Event added successfully!');

        document.getElementById('add-event-form').reset();
    };

    reader.readAsDataURL(eventImage);
});
