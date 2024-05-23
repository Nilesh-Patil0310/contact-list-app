import React, { useState } from 'react';

const ContactForm = ({ addContact, updateContact, currentContact }) => {
    // State variables to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (currentContact) {
          setName(currentContact.name);
          setEmail(currentContact.email);
          setPhone(currentContact.phone);
        }
      }, [currentContact]);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentContact) {
          updateContact(currentContact.id, name, email, phone);
        } else {
          addContact(name, email, phone);
        }
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;