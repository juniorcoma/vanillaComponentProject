import {
  DEFAULT_PROGRAMMING_LANGUAGE_LIST,
  FRAMEWOKRS_LIBRARIES_LIST,
  STYLING_DESIGN_LIST,
  VERSION_DEPLOYMENT_LIST,
} from '../../constant/index.js';
import Component from '../../core/Component.js';
import ContentHeader from './ContentHeader.js';

export default class MyTechArsenal extends Component {
  mounted() {
    const $contentHeader = this.$target.querySelector('[data-mounted="content-wrapper_header"]');
    new ContentHeader($contentHeader, {
      title: 'My Tech Arsenal',
      index: '02',
      setStateEvent: this.props.setStateEvent,
    });
  }
  template() {
    return `
            <div class='content-wrapper' data-mounted='content-wrapper'>
              <div class='header-wrap' data-mounted='content-wrapper_header'></div>
           
              <div class='main-container'>
                 <h4 class='sub-title'>Skills</h4>
                  <div class='skill-list_container'>
                    <div>
                      <div class='skill-group-text'>Core Web Technologies</div>
                      <div class='skill-render_box'>
                        ${DEFAULT_PROGRAMMING_LANGUAGE_LIST.map(item => {
                          return `
                          <div class='skill-box'>
                            <img src='${item.imgsrc}' />
                            <span>${item.text}</span>
                          </div>
                        `;
                        }).join('')}

                      </div>
                    </div>
                    <div>
                      <div class='skill-group-text'>Frameworks & Libraries</div>
                      <div class='skill-render_box'>
                        ${FRAMEWOKRS_LIBRARIES_LIST.map(item => {
                          return `
                          <div class='skill-box'>
                            <img src='${item.imgsrc}' alt='${item.text} image'/>
                            <span>${item.text}</span>
                          </div>
                        `;
                        }).join('')}

                      </div>
                    </div>
                    <div>
                      <div class='skill-group-text'>Styling & Design</div>
                      <div class='skill-render_box'>
                        ${STYLING_DESIGN_LIST.map(item => {
                          return `
                          <div class='skill-box'>
                            <img src='${item.imgsrc}' alt='${item.text} image'/>
                            <span>${item.text}</span>
                          </div>
                        `;
                        }).join('')}

                      </div>
                    </div>
                    <div>
                      <div class='skill-group-text'>Version Control & Deployment</div>
                      <div class='skill-render_box'>
                        ${VERSION_DEPLOYMENT_LIST.map(item => {
                          return `
                          <div class='skill-box'>
                            <img src='${item.imgsrc}' alt='${item.text} image'/>
                            <span>${item.text}</span>
                          </div>
                        `;
                        }).join('')}

                      </div>
                    </div>
                  </div>
              </div>
            </div>
        `;
  }
}
