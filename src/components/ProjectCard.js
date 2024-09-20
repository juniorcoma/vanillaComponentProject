import Component from '../core/Component.js';

export default class ProjectCard extends Component {
  template() {
    return `
            <div class='project-card ${this.props.type === 'personal' ? 'personal' : 'team'}'>
                <div class='card-content_wrap'>
                    <div class='main-content'>
                        <div class='img-box'>
                            <div class='img'></div>
                        </div>
                        <div class='text-content'>
                            <div class='text-group_box'>
                                <strong>${this.props.renderData.title}</strong>
                                <p>${this.props.renderData.description}</p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        `;
  }
}
