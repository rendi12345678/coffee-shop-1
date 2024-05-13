// TestimonialsFooter.jsx
import React from "react";
import Button from "../common/Button";
import useTestimonialsScroll from "../../hooks/useTestimonialsScroll";

const TestimonialsFooter = () => {
  const { goToNext, goToPrev } = useTestimonialsScroll();

  return (
    <div className="testimonials__more-info">
      <p className="testimonials__description">
        See what other people are saying
      </p>
      <p className="testimonials__stars">
        <span className="star">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
        &nbsp;
        <span>(5/5)</span>
      </p>
      <Button
        variant="primary"
        type="button"
        size="medium"
        className="testimonials__button"
      >
        Read all reviews
      </Button>
      <div className="testimonials__buttons">
        <Button
          variant="fortiary"
          onClick={goToPrev}
          type="button"
          size="small"
          className="testimonials__prev-btn"
          shape="circle"
        >
          {"<"}
        </Button>
        <Button
          onClick={goToNext}
          variant="fortiary"
          type="button"
          size="small"
          className="testimonials__next-btn"
          shape="circle"
        >
          {">"}
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsFooter;
