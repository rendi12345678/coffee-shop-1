// TestimonialList.jsx
import TestimonialItem from "./TestimonialItem";
import useTestimonialsContext from "../../hooks/useTestimonialsContext";

const TestimonialList = ({ testimonials }) => {
  const { listRef } = useTestimonialsContext();

  return (
    <div className="testimonials__list" ref={listRef}>
      {testimonials.map((testimonial, index) => (
        <TestimonialItem key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;
