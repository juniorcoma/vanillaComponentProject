export default class Component {
  $target;
  state;
  props;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.initialState();
    this.render();
    this.setEvent();
  }
  initialState() {}
  mounted() {}
  template() {
    return '';
  }

  render() {
    if (this.$target) {
      this.$target.innerHTML = this.template();
      this.mounted();
      return;
    } else {
      this.mounted();
      return;
    }
  }

  setEvent() {}
  setState(newState) {
    this.state = newState;
    this.render();
  }
}
