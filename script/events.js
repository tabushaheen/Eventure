async function loadEvents() {
    const eventList = document.querySelector('.event-list');
    if (!eventList) {
        console.error('Error: Event list element not found in the DOM.');
        return;
    }

    eventList.innerHTML = '';

    let jsonEvents = [];
    let storedEvents = JSON.parse(localStorage.getItem('events')) || [];

    try {
        const response = await fetch('json/upcomingEvents.json');
        if (response.ok) {
            jsonEvents = await response.json();
            console.log('JSON events loaded:', jsonEvents);
        } else {
            console.error('Failed to fetch upcomingEvents.json. Status:', response.status);
        }
    } catch (error) {
        console.error('Error fetching upcomingEvents.json:', error);
    }

    jsonEvents.forEach(event => addEventToDOM(event, eventList));

    storedEvents.forEach(event => addEventToDOM(event, eventList));

    console.log('Stored events (from localStorage):', storedEvents);
}

function addEventToDOM(event, eventList) {
    if (!eventList) {
        eventList = document.querySelector('.event-list');
    }
    if (!eventList) {
        console.error('Error: Event list element not found in the DOM.');
        return;
    }

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
}

export function addNewEvent(event) {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];

    storedEvents.push(event);

    localStorage.setItem('events', JSON.stringify(storedEvents));

    const eventList = document.querySelector('.event-list');
    if (!eventList) {
        console.error('Error: Event list element not found in the DOM.');
        return;
    }

    addEventToDOM(event, eventList);

    console.log('New event added to localStorage and DOM:', event);
}

document.addEventListener('DOMContentLoaded', loadEvents);
