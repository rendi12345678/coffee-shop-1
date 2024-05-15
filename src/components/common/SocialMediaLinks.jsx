import React from "react";

const SocialMediaLinks = ({ socialMedia }) => (
  <div className="footer__column">
    <h5 className="footer__title">Follow Us</h5>
    <ul className="footer__list footer__list--links">
      {socialMedia.map(({ name, url, imgSrc }, index) => (
        <li className="footer__item footer__item--link" key={index}>
          <a className="footer__link">
            <img src={imgSrc} alt={name} title={name} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialMediaLinks;
