const tabs = document.querySelectorAll('[data-tab="tab"]');

const setupTab = (tab) => {
  const items = tab.querySelectorAll('[data-tab="item"]');
  const toggles = tab.querySelectorAll('[data-tab="toggle"]');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();

      const id = event.target.getAttribute('href');

      items.forEach((item) => item.classList.remove('is-active'));
      toggles.forEach((item) => item.classList.remove('is-active'));

      toggle.classList.add('is-active');
      tab.querySelector(id).classList.add('is-active');
    });
  });

  toggles[0].click();
};

export const initializeTabs = () => {
  if (tabs) {
    tabs.forEach(setupTab);
  }
};
