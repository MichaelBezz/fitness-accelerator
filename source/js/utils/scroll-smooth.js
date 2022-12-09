const links = document.querySelectorAll('[data-link="smooth"]');

const addSmoothEffect = (element) => {
  const id = element.getAttribute('href');
  const targetBlock = document.querySelector(id);

  if (targetBlock) {
    targetBlock.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
};

export const initializeSmoothScroll = () => {
  if (links.length) {
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        addSmoothEffect(event.target);
      });
    });
  }
};
