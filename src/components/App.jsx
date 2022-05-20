import React, { Component } from "react";
import Form from "./form/Form";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";

//? Library
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };


  //todo Function
// !
  formSubmitHandler = (stateData) => {
    const nameArr = this.state.contacts.map(elem => elem.name.toLowerCase())
    if (nameArr.includes(stateData.name.toLowerCase())) {
      return Report.failure(
        "Failure",
        `${stateData.name} is already in contacts!`,
        "Try again"
      );
    };

    this.setState(prevState => ({
      contacts:
        [{ id: nanoid(), name: stateData.name, number: stateData.number }, ...prevState.contacts]
    }) );
  };

// !
  filterHandler = (e) => { this.setState({ filter: e.currentTarget.value }) };

// !
  deleteComponent = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((elem) => elem.id !== id)
    }) );
  };


  //todo Render()
  render() {
    const { contacts, filter } = this.state;
    const filtered = contacts.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div>
        <h1>Phonebook</h1>
        <Form submit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={filter} change={this.filterHandler} />
        <ContactList contacts={filtered} deleteById={this.deleteComponent} />
      </div>
    );
  };
};

export default App;