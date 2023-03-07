export const checkNumInput = (selector) => {
  const numInput = document.querySelectorAll(selector);

  numInput.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/, '');
    });
  });
};