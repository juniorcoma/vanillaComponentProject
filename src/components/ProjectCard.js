import Component from '../core/Component.js';
import ImgSlider from './ImgSlider.js';

export default class ProjectCard extends Component {
  mounted() {
    const $imgSliderContainer = this.$target.querySelector('[data-mounted="img-slider_container"]');
    new ImgSlider($imgSliderContainer, { imgList: this.props.renderData.imgList });
  }
  template() {
    return `
            <div class='project-card ${this.props.type === 'personal' ? 'personal' : 'team'}'>
                <div class='card-content_wrap'>
                    <div class='main-content'>
                        <div class='img-slider_container' data-mounted='img-slider_container'>
                         
                        </div>
                        <div class='text-content'>
                            <div class='text-group_box'>
                                <strong>${this.props.renderData.title}</strong>
                                <p>${this.props.renderData.description}</p>
                                <div class='point-text_box'>
                                    ${this.props.renderData.projectPoint
                                      .map((point, index) => {
                                        return ` <p>${index + 1}. ${point}</p>`;
                                      })
                                      .join('')}
                                </div>
                            </div>
                        </div>
                        <div class='skills-badge_box'>
                            <span>핵심 사용스킬</span>
                            <div class='badge-box'>
                            ${this.props.renderData.technologiesStack
                              .map(skill => {
                                return `
                                    <span class='skill-badge'>
                                        ${skill}
                                    </span>
                                `;
                              })
                              .join('')}
                            </div>
                          
                        </div>
                    </div>
                    <div class='link-box'>
                        ${this.props.renderData.links
                          .map(link => {
                            return `
                            <a href='${link.link}' class='project-link' target='_blank'>
                                <img src='${link.imgsrc}' class='project-link_img'/>
                                <span>${link.text}</span>
                            </a>
                            `;
                          })
                          .join('')}
                    </div>
                </div>
            </div>
        `;
  }
}
