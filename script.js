//Implementing notification
if (Notification.permission === "granted") {
  let notification = new Notification("Welcome to Raad's Gameshop!");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
      let notification = new Notification("Welcome to Raad's Gameshop!");
    }
  });
}
//To get a submission message
function submitForm(event) {
  event.preventDefault(); // prevent default form submission
  if (validateForm()) { // check if form is valid
    alert('Thank you for your submission.'); // show success message
    document.getElementById('contact-form').reset(); // reset form
  }
}
//Conditional for Validating form
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const netID = document.getElementById('netID').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message').value;
  if (name.trim().length < 3) {
    alert('Name must be at least 3 characters long.');
    return false;
  }
  if (email.trim() === '') {
    alert('Please enter your email address.');
    return false;
  }
  if (netID.trim() === '') {
    alert('Please enter your Net ID.');
    return false;
  }
  if (password.trim() === '') {
    alert('Please enter your password.');
    return false;
  }
  if (message.trim() === '') {
    alert('Please enter a message.');
    return false;
  }
  return true;
}
//Color changer
function changeColor(color) {
  document.body.style.backgroundColor = color;
}
//Event handler
const checkButton = document.querySelector('#check-button');
checkButton.addEventListener('click', checkAge);

function checkAge() {
  const ageInput = document.querySelector('#age');
  const age = parseInt(ageInput.value);
  const result = document.querySelector('#result');

  if (isNaN(age) || age < 0) {
    result.textContent = 'Please enter a valid age!';
  } else if (age > 10) {
    result.textContent = 'This website is eligible for you.';
  } else {
    result.textContent = 'This website is not eligible for you.';
  }
}

