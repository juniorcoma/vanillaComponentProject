import { SOCIAL_LIST } from '../../constant/index.js';
import Component from '../../core/Component.js';
import AboutMe from '../content/AboutMe.content.js';
import PersonalProject from '../content/PersonalProject.content.js';
import ProblemSolving from '../content/ProblemSolving.content.js';
import TeamProject from '../content/TeamProject.content.js';
import ContentMenu from '../ContentMenu.js';

export default class HomeContainer extends Component {
  mounted() {
    const { setStateEvent } = this;
    const $ContentMenu = this.$target.querySelector('[data-mounted="content-menu"]');
    new ContentMenu($ContentMenu, { setStateEvent: setStateEvent.bind(this) });
    const $AboutContent = this.$target.querySelector('[data-mounted="content-about"]');
    const $ProblemContent = this.$target.querySelector('[data-mounted="content-problem"]');
    const $PersonalContent = this.$target.querySelector('[data-mounted="content-personal"]');
    const $TeamContent = this.$target.querySelector('[data-mounted="content-team"]');
    new AboutMe($AboutContent, { setStateEvent: setStateEvent.bind(this) });
    new ProblemSolving($ProblemContent, { setStateEvent: setStateEvent.bind(this) });
    new PersonalProject($PersonalContent, { setStateEvent: setStateEvent.bind(this) });
    new TeamProject($TeamContent, { setStateEvent: setStateEvent.bind(this) });
  }

  initialState() {
    this.state = false;
  }

  template() {
    return `
            <div class='container main ${this.state !== false ? 'hidden' : ''}'>
              <div>
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
            <div class='container sub ${this.state !== false ? 'isVisible' : ''}'>
                <div class='${this.state === 0 ? 'open' : ''}' data-mounted='content-about'></div>
                <div class='${this.state === 1 ? 'open' : ''}' data-mounted='content-problem'></div>
                <div class='${this.state === 2 ? 'open' : ''}' data-mounted='content-personal'></div>
                <div class='${this.state === 3 ? 'open' : ''}' data-mounted='content-team'></div>
            </div>
        `;
  }

  setStateEvent(value) {
    this.setState(value);
  }
}
