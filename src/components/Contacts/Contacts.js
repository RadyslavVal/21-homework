import React from 'react';
import './Contacts.css';
import Contact from '../Contact/Contact'

const Contacts = ({ data }) => {
    return (
        <div className="Contacts">
            {data.map(contact => <Contact data={contact} key={contact.firstName + " " + contact.lastName} />)
            }
        </div >
    );
}

export default Contacts;
