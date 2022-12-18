const players = document.querySelectorAll('[data-video="player"]');

const parseMediaURL = (link) => {
  const regexp = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i;
  const url = link.href;
  const [, match] = url.match(regexp);

  return match;
};

const createIframe = (id) => {
  const iframe = document.createElement('iframe');
  const source = `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`;

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', source);
  iframe.classList.add('video__media');

  return iframe;
};

const setupVideoPlayer = (player) => {
  const link = player.querySelector('[data-video="link"]');
  const button = player.querySelector('[data-video="button"]');
  const id = parseMediaURL(link);

  const iframe = createIframe(id);

  player.addEventListener('click', () => {
    player.appendChild(iframe);
    link.remove();
    button.remove();
  });

  link.removeAttribute('href');
  player.classList.add('is-available');
};

export const initializeVideoPlayers = () => {
  if (players) {
    players.forEach(setupVideoPlayer);
  }
};
