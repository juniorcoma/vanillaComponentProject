import Component from '../../core/Component.js';

export default class ContentHeader extends Component {
  template() {
    return `
    <div class='content-header_wrapper'>
        <div class='text-wrap'>
        <span>${this.props.index}</span><h3>${this.props.title}</h3>
       </div>
       <button class='exit-content_btn'>
            <img src='/src/asset/icons/exit.svg' alt='exit content' />
       </button>
    </div>
        `;
  }

  setEvent() {
    const exitBtn = this.$target.querySelector('.exit-content_btn');

    exitBtn.addEventListener('click', () => {
      this.props.setStateEvent(false);
    });
  }
}
