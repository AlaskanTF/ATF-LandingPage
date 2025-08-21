// Matrix effect settings
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set the canvas size to the full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to display (Matrix style)
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize; // Number of columns for the matrix effect
const drops = [];

// Initialize drop positions for each column
for (let x = 0; x < columns; x++) {
  drops[x] = 1; // Start all drops from the top
}

// Function to draw the matrix effect
function drawMatrix() {
  // Set background to black with slight transparency for fading effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the text style
  ctx.fillStyle = '#00FF00'; // Green color for matrix text
  ctx.font = `${fontSize}px monospace`; // Use monospace font

  // Loop through all columns
  for (let i = 0; i < drops.length; i++) {
    // Randomly pick a character from the set
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    // Draw the character at the current drop position
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset the drop position when it reaches the bottom of the canvas
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Move the drop position down
    drops[i]++;
  }
}

// Call the drawMatrix function at 30 frames per second
setInterval(drawMatrix, 30);

// Adjust the canvas size when the window is resized
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Function to handle button clicks with confirmation and redirect
function handleButtonClick(event, url) {
  event.preventDefault();  // Prevent immediate navigation
  const confirmationMessage = `You are about to visit: ${url}`;

  // Show a custom message (could be a confirmation or alert)
  if (window.confirm(confirmationMessage)) {
    // After confirmation, navigate to the desired link
    window.location.href = url;
  }
}

// Attach event listeners to the buttons for custom handling
document.getElementById('blogButton').addEventListener('click', function(event) {
  handleButtonClick(event, 'https://blog.alaskantf.com');
});

document.getElementById('contactButton').addEventListener('click', function(event) {
  handleButtonClick(event, 'https://blog.alaskantf.com/contact-me/');
});

document.getElementById('reportButton').addEventListener('click', function(event) {
  handleButtonClick(event, 'https://blog.alaskantf.com/contact-me/');
});
