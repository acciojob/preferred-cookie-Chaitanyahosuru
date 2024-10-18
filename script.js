//your JS code here. If required.
const form = document.querySelector('form');
const fontsizeInput = document.getElementById('fontsize');
const fontcolorInput = document.getElementById('fontcolor');

// Load saved preferences from cookies
loadPreferences();

// Event listener for save button
form.addEventListener('submit', (e) => {
  e.preventDefault();
  savePreferences();
});

// Save preferences as cookies
function savePreferences() {
  const fontsize = fontsizeInput.value;
  const fontcolor = fontcolorInput.value;

  document.cookie = `fontsize=${fontsize}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  document.cookie = `fontcolor=${fontcolor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

  updatePreferences();
}

// Load saved preferences from cookies
function loadPreferences() {
  const cookies = document.cookie.split(';');

  cookies.forEach((cookie) => {
    const [key, value] = cookie.trim().split('=');

    if (key === 'fontsize') {
      fontsizeInput.value = value;
    } else if (key === 'fontcolor') {
      fontcolorInput.value = value;
    }
  });

  updatePreferences();
}

// Update CSS variables with saved preferences
function updatePreferences() {
  const fontsize = fontsizeInput.value;
  const fontcolor = fontcolorInput.value;

  document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontcolor);
}


