import React from "react";
import { Link } from "react-router-dom";

const ContactItem = ({ contact, editContact, deleteContact }) => {
  
  return (
    <div className="card d-flex flex-row justify-content-around">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Username: {contact.username}</p>
        <p className="card-text">Email: {contact.email}</p>
        <p className="card-text">Phone: {contact.phone}</p>
        <p className="card-text">Website: {contact.website}</p>
        <p className="card-text">Address: {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</p>
        <p className="card-text">Company: {contact.company.name}</p>
        <Link to='/addcontact'>
        <button className="btn btn-success" onClick={() => editContact(contact)}>Edit</button>
        </Link>
        &nbsp;&nbsp;
        <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>Delete</button>
        
      </div>
    </div>
  );
};

export default ContactItem;
