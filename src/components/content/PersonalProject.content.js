import { PROJECT_LIST } from '../../constant/index.js';
import Component from '../../core/Component.js';
import ProjectCard from '../ProjectCard.js';
import ContentHeader from './ContentHeader.js';

export default class PersonalProject extends Component {
  mounted() {
    const $contentHeader = this.$target.querySelector('[data-mounted="content-wrapper_header"]');
    const $project1 = this.$target.querySelector('[data-mounted="project1"]');
    const $project2 = this.$target.querySelector('[data-mounted="project2"]');
    new ContentHeader($contentHeader, {
      title: 'Personal Project',
      index: '03',
      setStateEvent: this.props.setStateEvent,
    });
    new ProjectCard($project1, { type: 'personal', renderData: PROJECT_LIST.personal.yoogg });
    new ProjectCard($project2, { type: 'personal', renderData: PROJECT_LIST.personal.portfolio });
  }
  template() {
    return `
        <div class='content-wrapper' data-mounted='content-wrapper'>
          <div class='header-wrap' data-mounted='content-wrapper_header'></div>
          <div class='project-content_container'>
            <div data-mounted="project1">

            </div>
            <div data-mounted="project2">

            </div>
          </div>
        </div>
        `;
  }
}
