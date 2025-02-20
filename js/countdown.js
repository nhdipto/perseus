// countdown.js
// Set the expiration date (5 days from now)
const now = new Date();
const expirationDate = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000); // 5 days in milliseconds

// Update the countdown every second
const countdownElement = document.getElementById('countdown'); // Ensure this element exists in your HTML

const countdown = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the distance between now and the expiration date
    const distance = expirationDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "Discount has expired!";
    }
}, 1000);
