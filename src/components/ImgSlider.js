import Component from '../core/Component.js';

export default class ImgSlider extends Component {
  constructor($target, props) {
    super($target, props);
    this.sliderEvent();
  }

  template() {
    return `
      <div class='img-slider_view'>
        <ul class='img-sliders'>
          ${[...this.props.imgList, ...this.props.imgList]
            .map(img => {
              return `
                <li class='img-wrap'>
                  <img class='slider-img' src='${img}' alt='slider img' />
                </li>
              `;
            })
            .join('')}
        </ul>
      </div>
    `;
  }

  sliderEvent() {
    let index = 1;
    const sliderWidth = this.$target.querySelector('.img-slider_view').clientWidth;
    const sliders = this.$target.querySelector('.img-sliders');
    const imgListLength = this.props.imgList.length;
    this.$target.querySelectorAll('.img-wrap').forEach(wrap => {
      wrap.style.width = `${sliderWidth}px`;
    });
    const slide = () => {
      sliders.style.transition = 'transform 0.5s ease-in-out';
      sliders.style.transform = `translateX(-${sliderWidth * index}px)`;
      index++;

      if (index > imgListLength) {
        setTimeout(() => {
          sliders.style.transition = 'none';
          sliders.style.transform = `translateX(0px)`;
          index = 1;
        }, 500);
      }
    };

    setInterval(slide, 5000);
  }
}
