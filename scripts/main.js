"use strict";

// constant fucntion to verify emails.
const checkEmail = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

// validation.js content
document.addEventListener('DOMContentLoaded', function () {

  // Edit item form validation
  const editItemForm = document.getElementById('edit-form');
  if (editItemForm) {
    // input and error declaration
    const titleInput = document.getElementById('title');
    const titleError = titleInput.nextElementSibling;

    const descInput = document.getElementById('description');
    const descError = descInput.nextElementSibling;

    const statusButtons = Array.from(document.getElementsByName('status'));
    const statusError = statusButtons[2].closest('div').nextElementSibling;

    const detailsInput = document.getElementById('details');
    const detailsError = detailsInput.nextElementSibling;

    const proofInput = document.getElementById('proof');
    const proofError = proofInput.nextElementSibling;

    editItemForm.addEventListener("submit", (ev) => {
      let errors = false;
      // if validation fails prevent form submission

      if (titleInput.value !== "") {
        titleError.classList.add('hidden');
      } else {
        titleError.classList.remove('hidden');
        errors = true;
      }

      if (descInput.value !== "") {
        descError.classList.add('hidden');
      } else {
        descError.classList.remove('hidden');
        errors = true;
      }

      if (statusButtons.some(button => button.checked)) {
        statusError.classList.add('hidden');
      } else {
        statusError.classList.remove('hidden');
        errors = true;
      }

      if (detailsInput.value !== "") {
        detailsError.classList.add('hidden');
      } else {
        detailsError.classList.remove('hidden');
        errors = true;
      }

      if (proofInput.files.length != 0) {
        proofError.classList.add('hidden');
      } else {
        proofError.classList.remove('hidden');
        errors = true;
      }

        // IF THERE ARE ERRORS, PREVENT FORM SUBMISSION
        if (errors)
        ev.preventDefault();
    });


  // Register form validation
  const registerForm = document.getElementById('register-form');
  if (registerForm) {

    // input and error declaration
    const nameInput = document.getElementById('name');
    const nameError = nameInput.nextElementSibling;

    const genderSelect = document.getElementById('gender');
    const genderError = genderSelect.nextElementSibling;

    const userInput = document.getElementById('username');
    const userError = userInput.nextElementSibling;

    const emailInput = document.getElementById('email');
    const emailError = emailInput.nextElementSibling;

    const passwordInput = document.getElementById('password');
    const passwordError = passwordInput.nextElementSibling;

    const cpassInput = document.getElementById('confirm_password');
    const cpassError = cpassInput.nextElementSibling;

    const titleInput = document.getElementById('title');
    const titleError = titleInput.nextElementSibling;

    const descInput = document.getElementById('description');
    const descError = descInput.nextElementSibling;

    registerForm.addEventListener("submit", (ev) => {
      let errors = false;
      // If validation fails, prevent form submission with ev.preventDefault()

      if (nameInput.value !== "") {
        nameError.classList.add('hidden');
      } else {
        nameError.classList.remove('hidden');
        errors = true;
      }

      // check if there was nothing selected in the dropdown and handle appropriately
      if (genderSelect.value != 0) {
        genderError.classList.add('hidden');
      } else {
        genderError.classList.remove('hidden');
        errors = true;
      }

      if (userInput.value !== "") {
        userError.classList.add('hidden');
      } else {
        userError.classList.remove('hidden');
        errors = true;
      }

      // check if email is valid and handle appropriately
      if (checkEmail(emailInput.value)) {
        emailError.classList.add('hidden');
      } else {
        emailError.classList.remove('hidden');
        errors = true;
      }

      if (passwordInput.value !== "") {
        passwordError.classList.add('hidden');
      } else {
        passwordError.classList.remove('hidden');
        errors = true;
      }

      if (cpassInput.value == passwordInput.value) {
        cpassError.classList.add('hidden');
      } else {
        cpassError.classList.remove('hidden');
        errors = true;
      }

      if (titleInput.value !== "") {
        titleError.classList.add('hidden');
      } else {
        titleError.classList.remove('hidden');
        errors = true;
      }

      if (descInput.value !== "") {
        descError.classList.add('hidden');
      } else {
        descError.classList.remove('hidden');
        errors = true;
      }

        // IF THERE ARE ERRORS, PREVENT FORM SUBMISSION
        if (errors)
        ev.preventDefault();
    });
  }

  }
  /*
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
  });*/
});
