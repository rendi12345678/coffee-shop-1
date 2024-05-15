import React from "react";

const ContactInfo = ({ contactInfo }) => (
  <div className="footer__column">
    <h5 className="footer__title">Contact Us</h5>
    <ul className="footer__list">
      {contactInfo.map(({ title, text }, index) => (
        <li className="footer__item" key={index}>
          <span>{title}</span>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactInfo;
