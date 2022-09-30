import React, { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { nanoid } from 'nanoid';
import { ListStyled } from './styles';

export class App extends Component {
  state = {
    name: 'lol',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  onChange = e => {
    console.log(e.target.value);
    this.setState({ filter: e.target.value });
  };

  onSubmit = data => {
    console.log('onSubmit in APP');
    console.log(data);
    if (data.name === '' || data.number === '' || data.name.includes('  ')) {
      return alert(`Input is still empty !`);
    }
    if (this.state.contacts.find(({ name }) => name === data.name)) {
      alert(`${data.name} is alreaady in list`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          { name: data.name, number: data.number, id: nanoid() },
        ],
        number: '',
      });
    }
  };

  onDeleteClick = id => {
    // console.log('onDelete in APP', id);
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.id !== id;
      }),
    });
  };

  changeFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.changeFilter();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmit}
          name={this.state.name}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <ListStyled>
          <Filter
            contacts={this.state.contacts}
            value={this.state.filter}
            onChange={this.onChange}
            onDeleteClick={this.onDeleteClick}
          />
          <ContactList
            filterValue={this.state.filter}
            contacts={visibleContacts}
            onDeleteClick={this.onDeleteClick}
            state={this.state}
          />
        </ListStyled>
      </>
    );
  }
}
