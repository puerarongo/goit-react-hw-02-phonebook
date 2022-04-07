import React from "react";

const ContactList = ({contacts, deleteById}) => {
    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return <li key={id}>
                        <p>{name}: {number}</p>
                        <button type="button" onClick={() => deleteById(id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default ContactList;