
import React from 'react';
import ContactItem from './ContactItems';

const ContactList = ({ contacts, editContact, deleteContact }) => {
  return (
    <div className="bg-dark">
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          editContact={editContact}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;