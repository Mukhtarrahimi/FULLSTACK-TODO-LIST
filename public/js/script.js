document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.finished-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const taskId = btn.dataset.id;

      btn.classList.toggle('complete');
      const title = btn.nextElementSibling.querySelector('.title');
      title.classList.toggle('completed');

      try {
        const res = await fetch(`/${taskId}/done`, {
          method: 'PUT',
        });
        if (!res.ok) throw new Error('Failed to update task');
      } catch (err) {
        console.log(err);
      }
    });
  });
});
