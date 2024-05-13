// TestimonialItem.jsx
import React from "react";
import useTestimonialsScroll from "../../hooks/useTestimonialsScroll";
import useTestimonialsContext from "../../hooks/useTestimonialsContext";

const TestimonialItem = ({ praise, opinion, name, job, rating }) => {
  const { itemRef } = useTestimonialsContext();

  return (
    <div className="testimonials__item" ref={itemRef}>
      <div className="testimonials__content">
        <h4 className="testimonials__praise">{praise}</h4>{" "}
        <p className="testimonials__opinion">" {opinion} "</p>
        <p className="testimonials__name">{name}</p>
        <p className="testimonials__job">{job}</p>
        <div className="testimonials__rating">
          {[...Array(rating)].map((_, index) => (
            <span key={index} className="testimonials__star star">
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
