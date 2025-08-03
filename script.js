document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent default form submission

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
      return;
    }

    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
    }

    // Success message 
    formMessage.textContent = 'Thank you! Your message has been sent.';
    formMessage.style.color = 'green';


    form.reset();
  });
});
