// Write your code here!
// index.js

// Remove the main element with id 'main'
document.getElementById('main').remove();

// Create a new header element with id 'newHeader'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the new header
newHeader.textContent = 'John Komba is the champion'; // Replace YOUR-NAME with your desired name

// Append the new header to the body of the document
document.body.appendChild(newHeader);
