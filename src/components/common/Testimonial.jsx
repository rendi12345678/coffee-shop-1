const Testimonial = ({ praise, opinion, name, job, rating }) => {
  return (
    <div className="testimonials__item">
      <div className="testimonials__content">
        <h4 className="testimonials__praise">{praise}</h4>
        <p className="testimonials__opinion">{opinion}</p>
        <p className="testimonials__name">{name}</p>
        <p className="testimonials__job">{job}</p>
        <div className="testimonials__rating">
          {[...Array(rating)].map((_, index) => (
            <span key={index} className="testimonials__star">
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
