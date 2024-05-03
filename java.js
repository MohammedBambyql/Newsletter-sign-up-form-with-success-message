const openPopupButton  = document.getElementById('first-container');
const closePopupButton = document.getElementById('btn-popup');
const emailInput = document.getElementById('email-input');
const FormContainer = document.getElementById('container');
const popup = document.getElementById('popup');
openPopupButton .addEventListener('click', () => {
  const email = emailInput.value;

  if (validateEmail(email)){
    FormContainer.style.display = 'none';
    popup.style.display = 'block';
  }
  else{
    alert('Please enter a valid email address');
  }
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
  FormContainer.style.display = 'block';
  FormContainer.style.display = 'flex';
});

function validateEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}