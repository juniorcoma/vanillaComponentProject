import Component from '../core/Component.js';
import ContentMenu from './ContentMenu.js';

export default class Moblie extends Component {
  mounted() {
    const $ContentMenu = this.$target.querySelector('[data-mounted="content-menu"]');
    new ContentMenu($ContentMenu, { setStateEvent: this.props.setStateEvent });
  }
  template() {
    return `
            <button class='moblie-menu_btn'>
                메뉴 열기
            </button>
            <div class='moblie-menu'>
                <div class='exit'>
                    <button class='exit-btn'>
                        닫기
                    </button>
                </div>
                <div class='moblie-content_menu' data-mounted='content-menu'>
                
                </div>
            </div>
        `;
  }

  setEvent() {
    const moblie_btn = this.$target.querySelector('.moblie-menu_btn');
    const exitBtn = this.$target.querySelector('.exit-btn');
    const mobliePop = this.$target.querySelector('.moblie-menu');

    exitBtn.addEventListener('click', () => {
      mobliePop.classList.remove('open');
    });
    moblie_btn.addEventListener('click', () => {
      mobliePop.classList.add('open');
    });
  }
}
