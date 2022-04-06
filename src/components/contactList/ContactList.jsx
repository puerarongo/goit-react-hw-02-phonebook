import React from "react";

const ContactList = ({contacts}) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map((elem) => {
                    return <li key={elem.id}>{elem.name}: {elem.number}</li> 
                })}
            </ul>

        </div>
    )

};

export default ContactList;