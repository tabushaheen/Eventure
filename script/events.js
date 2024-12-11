let events = [];

document.addEventListener('DOMContentLoaded', loadEvents);

function loadEvents() {
    fetch('json/upcomingEvents.json')
        .then(response => response.json())
        .then(data => {
            events = data;
            
            populateEventList();
        })
        .catch(error => console.error('Error loading events:', error));
}

function populateEventList() {
    const eventList = document.querySelector('.event-list');
    eventList.innerHTML = '';

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.classList.add('event-item');

        const link = document.createElement('a');
        link.href = event.link;
        link.target = '_blank';
        link.classList.add('event-link');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('event-image');
        imageDiv.style.backgroundImage = `url('${event.image}')`;

        const nameParagraph = document.createElement('p');
        nameParagraph.classList.add('event-name');
        nameParagraph.textContent = event.name;

        const dateParagraph = document.createElement('p');
        dateParagraph.classList.add('event-date');
        dateParagraph.textContent = `Date: ${event.date}`;

        const locationParagraph = document.createElement('p');
        locationParagraph.classList.add('event-location');
        locationParagraph.textContent = `Location: ${event.location}`;

        link.appendChild(imageDiv);
        link.appendChild(nameParagraph);
        link.appendChild(dateParagraph);
        link.appendChild(locationParagraph);

        listItem.appendChild(link);

        eventList.appendChild(listItem);
    });
}
