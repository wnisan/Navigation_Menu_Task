import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div className="page">
      <h2>Contacts</h2>
      <p>Contact us in any convenient way:</p>
      <div className="contact-info">
        <p>Email: <strong>contact@gmail.com</strong></p>
        <p>Phone number: <strong>+375 (29) 456-78-90</strong></p>
        <p>Address: <strong>г. Minsk, ул. Central, д. 123</strong></p>
        <p>Opening hours: <strong>Mon-Fri: 9:00-18:00</strong></p>
      </div>
    </div>
  );
};

export default Contacts;