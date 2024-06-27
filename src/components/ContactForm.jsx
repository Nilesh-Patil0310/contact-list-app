

import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, updateContact, currentContact }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setUsername(currentContact.username);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
      setWebsite(currentContact.website);
      setStreet(currentContact.address.street);
      setSuite(currentContact.address.suite);
      setCity(currentContact.address.city);
      setZipcode(currentContact.address.zipcode);
      setCompanyName(currentContact.company.name);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      username,
      email,
      phone,
      website,
      address: {
        street,
        suite,
        city,
        zipcode
      },
      company: {
        name: companyName
      }
    };
    if (currentContact) {
      updateContact({ ...newContact, id: currentContact.id });
    } else {
      addContact(newContact);
    }
    setName('');
    setUsername('');
    setEmail('');
    setPhone('');
    setWebsite('');
    setStreet('');
    setSuite('');
    setCity('');
    setZipcode('');
    setCompanyName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        <label>Website:</label>
        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div>
        <label>Street:</label>
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
      </div>
      <div>
        <label>Suite:</label>
        <input type="text" value={suite} onChange={(e) => setSuite(e.target.value)} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <label>Zipcode:</label>
        <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
      </div>
      <div>
        <label>Company:</label>
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </div>
      <button type="submit">{currentContact ? 'Update' : 'Add'} Contact</button>
    </form>
  );
};

export default ContactForm;
