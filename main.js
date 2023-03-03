
import './modules/slider';
import modals from './modules/modal';
import tabs from './modules/tabs';

window.addEventListener('load', () => {
  modals();
  tabs('glazing_slider', '.glazing_block', '.glazing_content', 'active');
});





