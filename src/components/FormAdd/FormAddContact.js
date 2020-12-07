import React, { Component } from 'react';

class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };
  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = event => {
    console.log(event);
    console.log('Sumit ----');
    this.props.onSubmit(event, this.state.name, this.state.number);
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.name}
            name="name"
          />
        </label>
        <label>
          Number:
          <input
            type="text"
            name="number"
            onChange={this.onChange}
            value={this.state.number}
          />
        </label>
        <input type="submit" value="ADD" />
      </form>
    );
  }
}

export default FormAddContact;
