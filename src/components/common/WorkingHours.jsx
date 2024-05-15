import React from "react";

const WorkingHours = ({ workingHours }) => (
  <div className="footer__column">
    <h5 className="footer__title">Working Hours</h5>
    <ul className="footer__list">
      {workingHours.map(({ days, hours }, index) => (
        <li className="footer__item" key={index}>
          <span>{days}</span>
          <p>{hours}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default WorkingHours;
