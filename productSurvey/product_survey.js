// Select the submit button and assign the event handler
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Function to handle feedback submission
function submitFeedback() {
    // Collect input values
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Show feedback acknowledgment
    alert('Thank you for your valuable feedback');

    // Display user feedback on the page
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Make the user info section visible
    document.getElementById('userInfo').style.display = 'block';
}

// Add event listener for Enter key to trigger feedback submission
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
