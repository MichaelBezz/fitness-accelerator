import {iosVhFix} from './utils/ios-vh-fix';
import {webpChecker} from './utils/webp-checker';
import {initializeSmoothScroll} from './utils/scroll-smooth';
import {initializeLocalStorage} from './utils/local-storage';
import {initializeVideoPlayers} from './modules/video';
import {initializeTabs} from './modules/tabs';
import {initializeSwipers} from './modules/swiper';
import {initializeFormValidation} from './modules/form';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  webpChecker();
  initializeSmoothScroll();
  initializeLocalStorage();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initializeVideoPlayers();
    initializeTabs();
    initializeSwipers();
    initializeFormValidation();
  });
});
