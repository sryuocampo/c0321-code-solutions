import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'email' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ email: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email-input'>
          Email
        </label>
        <input type="email" id="email-input" value={this.state.value} onChange={this.handleChange}>
        </input>
       <button>Sign Up</button>

      </form>
    );
  }

}

ReactDOM.render(
  <NewsletterForm/>,
  document.querySelector('#root')
);
