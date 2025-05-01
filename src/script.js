// Initialize AOS animations
AOS.init();

// Form and Thank You message elements
const form = document.getElementById('waitingListForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent normal submit

  // Collect form data
  const formData = new FormData(form);

  // Send form data to Formspree
  fetch('https://formspree.io/f/xqaqekkn', { // <-- PUT YOUR REAL FORMSPREE LINK HERE
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.style.display = 'none'; // Hide form
      thankYouMessage.style.display = 'block'; // Show Thank You
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error submitting the form.');
  });
});

  