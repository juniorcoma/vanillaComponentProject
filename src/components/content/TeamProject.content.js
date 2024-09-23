import { PROJECT_LIST } from '../../constant/index.js';
import Component from '../../core/Component.js';
import ProjectCard from '../ProjectCard.js';
import ContentHeader from './ContentHeader.js';

export default class TeamProject extends Component {
  mounted() {
    const $contentHeader = this.$target.querySelector('[data-mounted="content-wrapper_header"]');
    new ContentHeader($contentHeader, { title: 'Team Project', index: '04', setStateEvent: this.props.setStateEvent });
    const $project1 = this.$target.querySelector('[data-mounted="project1"]');
    const $project2 = this.$target.querySelector('[data-mounted="project2"]');
    const $project3 = this.$target.querySelector('[data-mounted="project3"]');
    new ProjectCard($project1, { type: 'team', renderData: PROJECT_LIST.team.pickleTime });
    new ProjectCard($project2, { type: 'team', renderData: PROJECT_LIST.team.danchoo });
    new ProjectCard($project3, { type: 'team', renderData: PROJECT_LIST.team.rolling });
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
                  <div data-mounted="project3">

                  </div>
                 </div>
            </div>
        `;
  }
}
