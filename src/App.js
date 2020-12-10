import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/FormAdd';

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handelAddContact = (event, name, number) => {
    event.preventDefault();
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      window.alert(`${name} is alredy in contacts`);
      return;
    }

    const objCon = {
      name,
      number,
      id: uuidv4(),
    };

    const m = this.state.contacts;

    m.push(objCon);

    this.setState({ contacts: m });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(c => c.id !== contactId),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handelAddContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.onChange} />
        <ContactList
          contacts={this.getVisibleContacts()}
          value={this.state.filter}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
