// Timer setup: 2.5 minutes = 150 seconds
let timeLeft = 150;
const timerDisplay = document.getElementById("timer");
const statusDiv = document.getElementById("status");

// Countdown timer
const countdown = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.body.innerHTML = "<h2>Session expired. Please reload.</h2>";
  }
}, 1000);

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();

  if (userId && password) {
    statusDiv.innerText = "Login successful. Please wait...";

    // After 5 seconds, enable buttons and show message bar
    setTimeout(() => {
      document.getElementById("moveButton").disabled = false;
      document.getElementById("sendMessageButton").disabled = false;
      document.getElementById("messageBar").style.display = "block";
      statusDiv.innerText += "\nActions enabled.";
    }, 5000);
  } else {
    statusDiv.innerText = "Please enter valid credentials.";
  }
});

// Calculate Data button
document.getElementById("moveButton").addEventListener("click", () => {
  const userId = document.getElementById("userId").value.trim();
  alert(`User ID: ${userId}\nCharacter count: ${userId.length}`);
});

// Send Message button
document.getElementById("sendMessageButton").addEventListener("click", () => {
  document.getElementById("recipientBar").style.display = "block";
  statusDiv.innerText += "\nReady to send message.";
});

// Logout button
document.getElementById("logoutButton").addEventListener("click", () => {
  document.body.innerHTML = "<h2>You have been logged out.</h2>";
});