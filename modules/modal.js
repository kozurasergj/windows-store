export const modals = () => {
  const bindModal = ({ triggersSelector, modalSelector, closeSelector, closeClickOverlayModal }) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', event => {
        if (event.target) {
          event.preventDefault();
        }
        closeAllModals();
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
      })
    });

    const closeAllModals = () => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });
    };

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        closeModal(modal);
      }
    });

    close.addEventListener('click', () => {
      closeModal(modal);
      closeAllModals();
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal && closeClickOverlayModal) {
        closeModal(modal);
        closeAllModals();
      }
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

  bindModal({
    triggersSelector: '.popup_engineer_btn',
    modalSelector: '.popup_engineer',
    closeSelector: '.popup_engineer .popup_close',
    closeClickOverlayModal: true,
  });
  bindModal({
    triggersSelector: '.phone_link',
    modalSelector: '.popup',
    closeSelector: '.popup .popup_close',
    closeClickOverlayModal: true,
  });
  bindModal({
    triggersSelector: '.popup_calc_btn',
    modalSelector: '.popup_calc',
    closeSelector: '.popup_calc_close',
    closeClickOverlayModal: true,
  });
  bindModal({
    triggersSelector: '.popup_calc_button',
    modalSelector: '.popup_calc_profile',
    closeSelector: '.popup_calc_profile_close',
    closeClickOverlayModal: false,
  });
  bindModal({
    triggersSelector: '.popup_calc_profile_button',
    modalSelector: '.popup_calc_end',
    closeSelector: '.popup_calc_end_close',
    closeClickOverlayModal: false,
  });
  showModalByTime('.popup', 60000);
}