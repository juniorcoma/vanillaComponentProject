import { CONTENT_MENU_LISt } from '../constant/index.js';
import Component from '../core/Component.js';

export default class ContentMenu extends Component {
  template() {
    return `

    ${CONTENT_MENU_LISt.map((item, index) => {
      return `
        <button class='content-control_btn' data-index='${index + 1}'>
            <div class='content-btn_header'>
                    <h3>${item.title}</h3>
                    <span>0${index + 1}<span>
            </div>
            <p class='content-description'>${item.description}</p>
            <div class='bottom-line' />
        </button>
        `;
    }).join('')}
           
        `;
  }

  setEvent() {
    const btn = document.querySelectorAll('.content-control_btn');

    btn.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.props.setStateEvent(index);
      });
    });
  }
}
