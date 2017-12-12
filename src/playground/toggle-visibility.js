export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      visible: false
    }
  }
  handleChange() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleChange}>{this.state.visible ? "Hide details" : "Show details"}</button>
        {
          this.state.visible &&
          <div>
            <p>Here are some details</p>
          </div>
        }
      </div>
    )
  }
}
