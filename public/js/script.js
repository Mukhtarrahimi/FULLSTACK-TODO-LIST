document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.finished-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('complete');
    });
  });
});
