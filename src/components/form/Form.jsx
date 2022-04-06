import React from "react";

const Form = ({name, phone, input, submit}) => {
    return (
        <div>
            <h2>Phonebook</h2>
        <form onSubmit={submit}>
            <label>Name
                <input
    type="text"
    name="name"
    value={name}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    onChange={input}
    required
/>
                </label>
                <label>Number
                    <input
    type="tel"
    name="number"
    value={phone}
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    onChange={input}
    required
/>
                </label>

            <button type="sumbmit">Add contact</button>
        </form>
        </div>

    );

};

export default Form;