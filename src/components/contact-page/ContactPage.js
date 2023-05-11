import React from 'react';
import { useState } from 'react';
import styles from "./ContactPage.module.css";

export function ContactPage() {
  return (
    <div className={styles.mainWrapper}>
        <h1>Contacts</h1>
        <h3>For questions, feedback and overall information feel free to contact us on our e-mail: <b><u>bg-baba@mail.com</u></b> .</h3>
        <h3><i>or feel free to use our contact form below</i></h3>
        <ContactForm/>

    </div>
  );
}

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using the client's input
    const subject = `Contact Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoLink = `mailto:murobg@abv.bg?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the composed email
    window.open(mailtoLink);

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

