import { SOCIAL_LIST } from '../../constant/index.js';
import Component from '../../core/Component.js';
import AboutMe from '../content/AboutMe.content.js';
import PersonalProject from '../content/PersonalProject.content.js';
import MyTechArsenal from '../content/MyTechArsenal.content.js';
import TeamProject from '../content/TeamProject.content.js';
import ContentMenu from '../ContentMenu.js';
import Moblie from '../Moblie.js';

export default class HomeContainer extends Component {
  mounted() {
    const { setStateEvent } = this;
    const $ContentMenu = this.$target.querySelector('[data-mounted="content-menu"]');
    new ContentMenu($ContentMenu, { setStateEvent: setStateEvent.bind(this) });
    const $AboutContent = this.$target.querySelector('[data-mounted="content-about"]');
    const $ProblemContent = this.$target.querySelector('[data-mounted="content-problem"]');
    const $PersonalContent = this.$target.querySelector('[data-mounted="content-personal"]');
    const $TeamContent = this.$target.querySelector('[data-mounted="content-team"]');
    const $Moblie = this.$target.querySelector('[data-mounted="moblie-box"]');
    new Moblie($Moblie, { setStateEvent: setStateEvent.bind(this) });
    new AboutMe($AboutContent, { setStateEvent: setStateEvent.bind(this) });
    new MyTechArsenal($ProblemContent, { setStateEvent: setStateEvent.bind(this) });
    new PersonalProject($PersonalContent, { setStateEvent: setStateEvent.bind(this) });
    new TeamProject($TeamContent, { setStateEvent: setStateEvent.bind(this) });
  }

  initialState() {
    this.state = { contentState: [false] };
  }

  template() {
    return `
            <div class='container main ${this.state.contentState[0] !== false ? 'hidden' : ''}'>          
              <div class='moblie-box' data-mounted='moblie-box'>
                
              </div>
              <div class='intro_wrap'>
                <h1 class='title'>PARK </br> HYEON WOO</h1>
                <div class='develop-position'>FRONTEND DEVELOPER</div>
                <nav class='social-box'>
                  ${SOCIAL_LIST.map(
                    social => `
                      <a href='${social.link}' class='${social.name}' target='_blank'>
                        <img src='${social.iconSrc}' alt='${social.name}' />
                      </a>
                    `,
                  ).join('')}
                </nav>
              </div>
              <div class='content-list' data-mounted='content-menu'>
                
              </div>
            </div>
            <div class='sub_pop sub1 ${this.state[0] === 0 ? 'on open' : ''}' data-mounted='content-about'></div>
            <div class='sub_pop sub2 ${this.state[0] === 1 ? 'on open' : ''}' data-mounted='content-problem'></div>
            <div class='sub_pop sub3 ${this.state[0] === 2 ? 'on open' : ''}' data-mounted='content-personal'></div>
            <div class='sub_pop sub4 ${this.state[0] === 3 ? 'on open' : ''}' data-mounted='content-team'></div>
      
        `;
  }

  setStateEvent(value) {
    this.setState('contentState', value);
  }

  setState(name, value) {
    if (this.state.contentState[this.state.contentState.length - 1] === value) {
      return;
    }
    this.state[name].push(value);
    if (this.state[name].length === 3) {
      this.state[name].shift();
    }

    this.render();
    this.setEvent();
  }

  setEvent() {
    const mainContainer = this.$target.querySelector('.container.main');
    console.log(this.state.contentState[this.state.contentState.length - 1] + 1);
    const sub_pop = this.$target.querySelector(
      `.sub_pop.sub${this.state.contentState[this.state.contentState.length - 1] + 1}`,
    );
    if (this.state.contentState[this.state.contentState.length - 1] !== false) {
      mainContainer.classList.add('hidden');
      sub_pop.classList.add('on');
      sub_pop.classList.add('open');
    } else {
      const prev_sub_pop = this.$target.querySelector(`.sub_pop.sub${this.state.contentState[0] + 1}`);
      prev_sub_pop.classList.remove('open');

      setTimeout(() => {
        mainContainer.classList.remove('hidden');
        prev_sub_pop.classList.remove('on');
      }, 500);
    }
  }
}
