// Add click event listener to the WhatsApp icon
document.getElementById('whatsapp-chat').addEventListener('click', function(event) {
    // Prevent the default link behavior to allow JavaScript to handle the click
    event.preventDefault();
  
    // Add your WhatsApp number to the link dynamically
    var phoneNumber = "0788113310"; // Replace with your WhatsApp number
    window.open('https://api.whatsapp.com/send?phone=' + phoneNumber, '_blank');
  });
  