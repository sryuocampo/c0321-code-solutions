import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
  }

  handleClick() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked < 3) {
      return <button className="hot-button cold" onClick ={() => this.handleClick()}>Hot Button</button>;
    } else if (isClicked < 6) {
      return <button className="hot-button cool" onClick ={() => this.handleClick()}>Hot Button</button>;
    } else if (isClicked < 9) {
      return <button className= "hot-button tepid" onClick ={() => this.handleClick()}>Hot Button</button>;
    } else if (isClicked < 12) {
      return <button className="hot-button warm" onClick ={() => this.handleClick()}>Hot Button</button>;
    } else if (isClicked < 15) {
      return <button className= "hot-button hot" onClick ={() => this.handleClick()}>Hot Button</button>;
    } else {
      return <button className= "hot-button hotter" onClick ={() => this.handleClick()}>Hot Button</button>;
    }
  }
}

ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);
