import Component from '../../core/Component.js';
import ContentHeader from './ContentHeader.js';

export default class TeamProject extends Component {
  mounted() {
    const $contentHeader = this.$target.querySelector('[data-mounted="content-wrapper_header"]');
    new ContentHeader($contentHeader, { title: 'Team Project', index: '04', setStateEvent: this.props.setStateEvent });
  }
  template() {
    return `
            <div class='content-wrapper' data-mounted='content-wrapper'>
              <div class='header-wrap' data-mounted='content-wrapper_header'></div>
            
            </div>
        `;
  }
}
