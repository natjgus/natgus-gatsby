import React from 'react'

import ContactForm from './ContactForm'

class Contact extends React.Component {
  render() {
    return ( 
      <div className="contact-component">
        <h2 className="major">Contact</h2>
        <p>Interested in working together, have any questions, or just want to connect? Send me a message and I will get back to you in the next 24 hours.</p>
        <ContactForm />
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/nathanielgustafson/" className="icon fa-linkedin"><span className="label">Facebook</span></a></li>
          <li><a href="https://www.instagram.com/supernatalio/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="https://github.com/natjgus" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
      </div>
    );
  }
}

export default Contact;