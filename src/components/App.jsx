import React, { Component } from "react";
import Form from "./form/Form";
import ContactList from "./contactList/ContactList";
import { nanoid } from 'nanoid';



class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: ''
  };

  // todo Function
  inputHandler = (e) => {
    console.log(this.state.contacts)
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
  };

  reset = () => {this.setState({name: "", number: ""}) };


  submitHandler = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    }

    this.setState(prevState => ({ contacts: [newContact, ...prevState.contacts] })
    );

    this.reset();
  };
// todo


  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <Form name={name} phone={number} input={this.inputHandler} submit={this.submitHandler} />
        <ContactList contacts={contacts} />
      </>
    )
  };
};


//<ContactList contacts={contacts} />

export default App;
