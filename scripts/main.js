// validation.js content
document.addEventListener('DOMContentLoaded', function () {
  // Register form validation
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
      // Perform validation checks here
      // If validation fails, prevent form submission with event.preventDefault()
      // Example validation check
      const name = document.getElementById('name').value;
      if (!name) {
        console.log('Name is required'); // Replace with proper error handling
        event.preventDefault();
      }
      // Add other validation checks as needed
    });
  }

  // Edit item form validation
  const editItemForm = document.getElementById('edit-item-form');
  if (editItemForm) {
    editItemForm.addEventListener('submit', function (event) {
      // Perform validation checks here
      // If validation fails, prevent form submission with event.preventDefault()
      // Example validation check
      const title = document.getElementById('title').value;
      if (!title) {
        console.log('Title is required'); // Replace with proper error handling
        event.preventDefault();
      }
      // Add other validation checks as needed
    });
  }

  // Confirmation dialog for delete account
  const deleteAccountForm = document.getElementById('delete-account-form');
  if (deleteAccountForm) {
    deleteAccountForm.addEventListener('submit', function (event) {
      if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        event.preventDefault();
      }
    });
  }

  // Confirmation dialog for delete item
  const deleteItemForm = document.getElementById('delete-item-form');
  if (deleteItemForm) {
    deleteItemForm.addEventListener('submit', function (event) {
      if (!confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
        event.preventDefault();
      }
    });
  }

  // Modal window functionality for viewing list items
  // Add event listeners to list items to open them in a modal window
  const listItems = document.querySelectorAll('.list-item-link');
  listItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      const itemId = this.getAttribute('data-item-id');
      // Fetch the content for the item and display it in a modal window
      // This is a placeholder for the actual implementation
      console.log('Open item in modal window:', itemId);
    });
  });
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Function to open the modal
function openModal(itemId) {
  fetch('/path-to-your-endpoint?itemId=' + itemId) // Update with your actual endpoint
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('modal-body').innerHTML = html;
    modal.style.display = 'block';
  })
  .catch(error => {
    console.error('Error fetching item details:', error);
    // Handle the error, e.g., by showing an error message to the user
  });
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Add event listeners to list items to open them in a modal window
const listItems = document.querySelectorAll('.list-item-link');
listItems.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    const itemId = this.getAttribute('data-item-id');
    openModal(itemId);
  });
});
