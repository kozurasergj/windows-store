export const form = (state) => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так',
  }
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });
    return await response.text();
  };
  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  const closeAllModal = () => {
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach((window) => {
      window.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  }

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData = new FormData(form);
      if (form.getAttribute('data-calc' === 'end')) {
        for (keyForm in state) {
          formData.append(keyForm, state[keyForm]);
        }
      }

      postData('server.php', formData)
        .then(() => {
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            closeAllModal();
          }, 3000);
        });
    });
  });
};