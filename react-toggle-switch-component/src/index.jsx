import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLightOn: false };
  }

  handleClick() {
    this.setState({ isLightOn: true });
  }

  render() {
    const isLightOn = this.state.isLightOn;
    if (isLightOn) {
      return <div className="light-off"></div>;
    } else {
      return <div className="light-on"></div>;
    }
  }
}

ReactDOM.render(
  <ToggleSwitch/>,
  document.querySelector('#root')
);
