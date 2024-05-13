// Testimonials.jsx
import React from "react";
import Container from "../common/Container";
import TestimonialsHeader from "../common/TestimonialHeader";
import TestimonialList from "../common/TestimonialList";
import TestimonialsFooter from "../common/TestimonialsFooter";

const testimonials = [
  {
    praise: "Best Coffee in Town",
    opinion:
      "Their coffee is hands down the best I've tasted. The aroma and flavor are simply divine.",
    name: "Alice Thompson",
    job: "Owner, Brew Haven Cafe",
    rating: 5,
  },
  {
    praise: "Excellent Service",
    opinion:
      "The staff here is always friendly and attentive. It's a pleasure to visit this coffee shop.",
    name: "Daniel Evans",
    job: "Manager, Morning Buzz Coffee",
    rating: 4,
  },
  {
    praise: "Cozy Atmosphere",
    opinion:
      "The cozy ambiance of this coffee shop makes it the perfect spot to relax and enjoy a cup of coffee.",
    name: "Olivia Parker",
    job: "Barista, Roast & Brew",
    rating: 5,
  },
  {
    praise: "Great Variety",
    opinion:
      "I love the variety of coffee options available here. There's always something new to try!",
    name: "Matthew Garcia",
    job: "Regular Customer",
    rating: 4,
  },
];

const Testimonials = () => (
  <section className="testimonials">
    <Container className="testimonials__container">
      <TestimonialsHeader />
      <TestimonialList testimonials={testimonials} />
      <TestimonialsFooter />
    </Container>
  </section>
);

export default Testimonials;
