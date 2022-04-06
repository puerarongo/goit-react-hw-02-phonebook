import React, { Component } from "react";

class Form extends Component {
    state = {
        name: '',
        number: ''
    };


    //todo Function
    inputHandler = (e) => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
    };

    reset = () => {this.setState({name: "", number: ""}) };


    submitHandler = (e) => {
    e.preventDefault();

    this.props.submit(this.state);

    this.reset();
  };


    render() {
    const { name, number } = this.state;

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={this.submitHandler}>
            <label>Name
                <input
    type="text"
    name="name"
    value={name}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    onChange={this.inputHandler}
    required
/>
            </label>
            <label>Number
                    <input
    type="tel"
    name="number"
    value={number}
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    onChange={this.inputHandler}
    required
/>
            </label>

        <button type="sumbmit">Add contact</button>
        </form>
        </div>
        );
    };
};

export default Form;