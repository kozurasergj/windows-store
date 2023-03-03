const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector);
  const allTab = document.querySelectorAll(tabsSelector);
  const content = document.querySelectorAll(contentSelector);
  const hideTabContent = () => {
    content.forEach((blockHtml) => {
      blockHtml.style.display = 'none';
    });
    allTab.forEach((elememt) => {
      elememt.classList.remove(activeClass);
    });
  };
  const showTabContent = (i = 0) => {
    content[i].style.display = 'block';
    allTab[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (event) => {
    const target = event.target;
    if (target &&
      (target.classList.contains(tabsSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
          allTab.forEach((element, index) => {
        if (target == element || target.parentNode == element) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
  header.addEventListener('keydown', (event) => {
    const target = event.target;
    if (event.key === 'Enter' && target &&
      (target.classList.contains(tabsSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
          allTab.forEach((element, index) => {
        if (target == element || target.parentNode == element) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
};
export { tabs };
