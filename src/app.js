import HomeContainer from './components/container/HomeContainer.js';

class App {
  constructor() {
    const $app = document.querySelector('#app');
    const home = new HomeContainer($app, { renderType: 'innerHTML' });
    home.render();
  }
}

new App();
