import Container from "../common/Container";
import Testimonial from "../common/Testimonial";
import Title from "../common/Title";

const Testimonials = () => {
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

  return (
    <div className="testimonials">
      <Container className="testimonials__container">
        <Title
          className="testimonials__title"
          title="What Our Customer's Say"
          textAlign="center"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Title>
        <div className="testimonials__list">
          {testimonials.map(({ praise, opinion, name, job, rating }, index) => (
            <Testimonial
              key={index}
              praise={praise}
              opinion={opinion}
              name={name}
              job={job}
              rating={rating}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
