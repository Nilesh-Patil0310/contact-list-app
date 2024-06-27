import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// Main App component
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  // Fetch contacts from the API when the component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setContacts(response.data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  // function to add contact
  const addContact = (contact) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", contact)
      .then((response) => setContacts([...contacts, response.data]))
      .catch((error) => console.error("Error adding contact:", error));
  };

  // function to update contact
  const updateContact = (contact) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
      .then((response) => {
        const updatedContacts = contacts.map((c) =>
          c.id === contact.id ? response.data : c
        );
        setContacts(updatedContacts);
        setCurrentContact(null);
      })
      .catch((error) => console.error("Error updating contact:", error));
  };

  // function to delete contact
  const deleteContact = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const filteredContacts = contacts.filter(
          (contact) => contact.id !== id
        );
        setContacts(filteredContacts);
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

  // function to set the current contact for editing
  const editContact = (contact) => {
    setCurrentContact(contact);
  };

  return (
    <div>
      {/* Router for navigating between deferent components */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/contacts" element={<ContactList contacts={contacts} editContact={editContact} deleteContact={deleteContact} />} />
          <Route path="/addcontact" element={<ContactForm addContact={addContact} updateContact={updateContact} currentContact={currentContact} />} />  
        </Routes>
      </Router>
    </div>
  );
};

export default App;
