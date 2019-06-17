import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    return(
      <div className="contact__wrapper">
        <a href="https://github.com/leireriel/" target="_blank" rel="noopener noreferrer" className="contact__link">
          <i className="fab fa-github contact__link--icon"></i>
        </a>
      </div>
    );
  }
}

export default Contact;