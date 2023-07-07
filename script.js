// Login page form validation
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form inputs
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '') {
    showError('usernameError', 'Username is required');
  } else {
    hideError('usernameError');
  }

  if (password === '') {
    showError('passwordError', 'Password is required');
  } else {
    hideError('passwordError');
  }

  // Perform login logic if form is valid
  if (username !== '' && password !== '') {
    // Perform login logic here
    console.log('Performing login...');
  }
});

// Register page form validation
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form inputs
  const companyName = document.getElementById('companyName').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('password').value;

  if (companyName === '') {
    showError('companyNameError', 'Company name is required');
  } else {
    hideError('companyNameError');
  }

  if (email === '') {
    showError('emailError', 'Email is required');
  } else {
    hideError('emailError');
  }

  if (password === '') {
    showError('passwordError', 'Password is required');
  } else {
    hideError('passwordError');
  }

  // Perform registration logic if form is valid
  if (companyName !== ''&& email !== '' && password !== '') {
    // Perform registration logic here
    console.log('Performing registration...');
  }
});

// Function to show error messages
function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
  errorElement.style.display = 'block';
}

// Function to hide error messages
function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.style.display = 'none';
}
