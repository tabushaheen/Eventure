//array for each link (moving bottom squares)
const links = [
    {
        "href": "https://www.mtl.org/en/what-to-do/festivals-and-events/luminotherapie-montreal",
        "target": "_blank",
        "style": "background-image: url('images/luminoSmall.jpg')",
        "name": "LUMINO"
    },
    {
        "href": "https://noeldansleparc.com",
        "target": "_blank",
        "style": "background-image: url('images/noelDansLeParcSmall.jpg')",
        "name": "NOEL DANS LE PARC"
    },
    {
        "href": "https://www.mtl.org/en/what-to-do/festivals-and-events/igloofest",
        "target": "_blank",
        "style": "background-image: url('images/igloofestSmall.png')",
        "name": "IGLOOFEST"
    },
    {
        "href": "https://festivalcinemania.com/en",
        "target": "_blank",
        "style": "background-image: url('images/cinemaniaSmall.jpg')",
        "name": "CINEMANIA"
    }
];

function loadEvents() {
    const linksTemplate = document.querySelector('.event-template');
    const linksContainer = document.querySelector('.event-container');


    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const clone = linksTemplate.content.cloneNode(true);
        clone.querySelector('.event-link').href = link.href;
        clone.querySelector('.event-link').target = link.target;
        clone.querySelector('.event-image').style = link.style;
        clone.querySelector('.event-name').textContent = link.name;
        linksContainer.appendChild(clone);
    }
}

window.addEventListener("DOMContentLoaded", loadEvents());

