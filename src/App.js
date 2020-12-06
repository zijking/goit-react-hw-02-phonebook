import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactsRender from './components/ContactList';
import Filter from './components/Filter';

// import FormaAdd from './components/form';

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handelAddContact = event => {
    event.preventDefault();
    // console.log(event);
    console.log(this.state);

    const objCon = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };

    const m = this.state.contacts;

    m.push(objCon);

    this.setState({ contacts: m });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const td = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    console.log('f->', normalizedFilter, '|');
    console.log(td);

    return td;
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        {/* <FormaAdd onSubmit={() => this.onSubmit} /> */}
        <div>
          <form onSubmit={this.handelAddContact}>
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
          <Filter onChange={this.onChange} />
          <h2>Contacts</h2>
          <ContactsRender
            contacts={this.getVisibleContacts()}
            value={this.state.filter}
          />
        </div>
      </div>
    );
  }
}

export default App;
