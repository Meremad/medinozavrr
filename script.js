// Chat functionality
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const messages = document.getElementById('messages');
const errorMessage = document.getElementById('error-message');

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = messageInput.value.trim();

    if (message === '') {
        errorMessage.textContent = "Message cannot be empty!";
    } else {
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        messages.appendChild(newMessage);
        messageInput.value = '';
        errorMessage.textContent = '';
    }
});

// Change background color
const changeBgBtn = document.getElementById('change-bg-btn');
changeBgBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffcc99', '#cc99ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Display current date and time
const dateTimeDisplay = document.getElementById('date-time');
setInterval(function() {
    const now = new Date();
    dateTimeDisplay.textContent = now.toLocaleString();
}, 1000);

// FAQ accordion functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// Popup form functionality
const subscribeBtn = document.getElementById('subscribe-btn');
const popupForm = document.getElementById('popup-form');
const closePopup = document.getElementById('close-popup');

subscribeBtn.addEventListener('click', function() {
    popupForm.style.display = 'block';
});

closePopup.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

// Form validation
const subscriptionForm = document.getElementById('subscription-form');
subscriptionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required!');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email.');
    } else if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        alert('Subscription successful!');
        popupForm.style.display = 'none';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
