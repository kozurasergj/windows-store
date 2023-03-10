import { checkNumInput } from "./CheckNumInput";
export const changeModalState = (state) => {
  const formsOfWindow = document.querySelectorAll('.balcon_icons_img');
  const windowHeight = document.querySelectorAll('#height');
  const windowWidth = document.querySelectorAll('#width');
  const windowOption = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');
  
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
            state[prop] = element.value;
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