const button = document.querySelector('.btn-whatsapp');
button.addEventListener('click', () => {
  window.open('https://web.whatsapp.com/send?phone=5511996460395', 'Whatsapp', 'height=600,width=800');
});


const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || messageInput.value === '') {
    alert('Preencha este campo');
  } else {
    
    form.submit();
  }
});