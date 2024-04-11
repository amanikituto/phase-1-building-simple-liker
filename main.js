// Get references to the elements we'll need
const heartIcons = document.querySelectorAll('.heart-icon');
const errorMessage = document.getElementById('error-message');
const errorModal = document.getElementById('error-modal');

// Add event listeners to each heart
heartIcons.forEach(icon => {
  icon.addEventListener('click', handleHeartClick);
});

function handleHeartClick(event) {
  const heartIcon = event.target;

  mimicServerCall()
    .then(() => {
      // Success! Update heart appearance 
      heartIcon.classList.add('activated-heart');

      // Toggle Font Awesome classes for more robust heart switching
      heartIcon.classList.toggle('fa-regular');
      heartIcon.classList.toggle('fa-solid'); 
    })
    .catch(() => {
      // Error! Show the modal
      errorMessage.textContent = 'Oops, something went wrong!';
      errorModal.classList.remove('hidden');

      // Hide the modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// (mimicServerCall function is provided for you)
