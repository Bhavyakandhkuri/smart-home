function toggleLights(room) {
    const roomStatus = document.getElementById(`${room}Status`);
    if (roomStatus.innerHTML === 'On') {
        roomStatus.innerHTML = 'Off';
        roomStatus.style.color = 'red';
    } else {
        roomStatus.innerHTML = 'On';
        roomStatus.style.color = 'green';
    }
    console.log(`${room} lights toggled`);
}

function changeTemperature() {
    const newTemp = document.getElementById('tempInput').value;
    console.log(`Temperature set to ${newTemp}F`);
}

function toggleDoorLock() {
    const doorLockStatus = document.getElementById('doorLockStatus');
    if (doorLockStatus.innerHTML === 'Locked') {
        doorLockStatus.innerHTML = 'Unlocked';
        doorLockStatus.style.color = 'green';
    } else {
        doorLockStatus.innerHTML = 'Locked';
        doorLockStatus.style.color = 'red';
    }
    console.log('Door lock toggled');
}

function setRating(event) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        if (star.getAttribute('data-rating') <= event.target.getAttribute('data-rating')) {
            star.innerHTML = '★';
        } else {
            star.innerHTML = '☆';
        }
    });
    const userRating = document.getElementById('userRating');
    userRating.innerHTML = `Your Rating: ${event.target.getAttribute('data-rating')} Stars`;
}

function submitFeedback() {
    const userRating = document.getElementById('userRating').textContent;
    console.log(`User Feedback: ${userRating}`);
    alert("Thank you for your feedback!");
}
