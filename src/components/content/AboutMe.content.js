import {
  DEFAULT_PROGRAMMING_LANGUAGE_LIST,
  FRAMEWOKRS_LIBRARIES_LIST,
  STYLING_DESIGN_LIST,
  VERSION_DEPLOYMENT_LIST,
} from '../../constant/index.js';
import Component from '../../core/Component.js';
import ContentHeader from './ContentHeader.js';

export default class AboutMe extends Component {
  mounted() {
    const $contentHeader = this.$target.querySelector('[data-mounted="content-wrapper_header"]');
    new ContentHeader($contentHeader, { title: 'About Me', index: '01', setStateEvent: this.props.setStateEvent });
  }

  template() {
    return `
            <div class='content-wrapper' data-mounted='content-wrapper'>
             <div class='header-wrap' data-mounted='content-wrapper_header'></div>
              <div class='content-box_about'>
                <div class='about-card'>
                  <figure>
                    <div class='profile-img_box'>
                        <img class='profile-img' src='/src/asset/image/증명사진.jpg' />
                    </div>
                    <figcaption>
                      <p>NAME : 박현우 </p>
                      <p>BRITH : 1998.08.19 </p>
                      <p>ADDRESS : 경상남도 창원시 </p>
                      <p>MAJOR : 수학 </p>
                      <p>EMAIL : pq120wal39@gmail.com </p>
                      <p>TELL : 010-5686-3892 </p>
                    </figcaption>
                  </figure>
                  <div class='introduction-box'>
                    <p>코드를 통해 시각적 요소와 상호작용을 구현하고, 이를 통해 사용자에게 즐거운 경험을 제공하는 과정에서 큰 즐거움과 성취를 느껴 프론트엔드 개발자가 된 박현우입니다.</p>
                    <p>수학에 항상 정답이 있듯이 개발에서도 정답을 찾기위해 끊임없이 고민하여 정답에 가까워지도록 노력하는 것을 좋아하고 어려운 문제에 직면했을 때 그 문제를 해결하기 위해 그 문제를 집중하여 생각하고 해결책을 찾는 것을 좋아합니다.</p>
                  </div>
                  <a href='/src/asset/download/이력서-박현우.pdf' id='resume-link' target='_blank'>
                    이력서 보러가기
                  </a>
                </div>
             
               
             
              
              </div>

            </div>
        `;
  }
}
