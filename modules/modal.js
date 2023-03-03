export const modals = () => {
  const bindModal = (triggersSelector, modalSelector, closeSelector) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', event => {
        if (event.target) {
          event.preventDefault();
        }
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
      })
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        closeModal(modal);
      }
    });

    close.addEventListener('click', () => {
      closeModal(modal);
    });


    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal(modal);
    });
  }

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.classList.add('modal-open');
    }, time);
  }

  const closeModal = (modal) => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');

  showModalByTime('.popup', 60000);
};
