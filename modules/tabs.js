const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector);
  console.log(headerSelector,header)
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {

    content.forEach((item) => {
      item.style.display = 'none';
    });

    tab.forEach((elememt) => {
      elememt.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {

    content[i].style.display = 'block';
    tab[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains(tabSelector.replace(/\./, '')) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tab.forEach((element, index) => {
        if (target == element || target.parentNode == element) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
};
export default tabs;