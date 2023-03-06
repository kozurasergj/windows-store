export const changeModalState = (state) => {
  const formsOfWindow = document.querySelectorAll('.balcon_icons_img');
  const windowHeight = document.querySelectorAll('#height');
  const windowWidth = document.querySelectorAll('#width');
  const windowOption = document.querySelectorAll('#view_type');
<<<<<<< HEAD
  const windowProfile = document.querySelectorAll('.checkbox');
=======
  const windowProfile = document.querySelectorAll('[name="radio"]');
  console.log(windowProfile)
>>>>>>> c3418c53df152c473580172577b6683b17f66a4b

  checkNumInput('#width');
  checkNumInput('#height');


  const bindActionToElement = (event, elements, prop) => {
    elements.forEach((element, index) => {
      element.addEventListener(event, () => {
        switch (element.nodeName) {
          case 'SPAN':
            state[prop] = index;
            break;
          case 'INPUT':
<<<<<<< HEAD
            state[prop] = element.value;
=======
            if (element.getAttribute('type') === 'radio') {
              index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
            } else {
              state[prop] = element.value;
            }
>>>>>>> c3418c53df152c473580172577b6683b17f66a4b
            break;
          case 'SELECT': state[prop] = element.value;
            break;
        }
        console.log(state);
      });
    });
  };
  bindActionToElement('click', formsOfWindow, 'form');
  bindActionToElement('input', windowWidth, 'width');
  bindActionToElement('input', windowHeight, 'heigh');
  bindActionToElement('change', windowOption, 'option');
  bindActionToElement('change', windowProfile, 'profile');
};