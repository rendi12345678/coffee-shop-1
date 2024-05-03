import Container from "../common/Container";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Container className="hero__container">
        <div className="hero__info">
          <h6 className="hero__sub-title">Coffee Shop</h6>
          <h1 className="hero__title">
            Keep your dreams aroused with a cup of coffee
          </h1>
          <p className="hero__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ad
            sed aut officia aspernatur velit distinctio vel illum, facilis iure
            quisquam cumque, molestiae unde. Nesciunt qua e praesentium
            dignissimos expedita! Veniam.
          </p>
          <Button className="hero__button" color="primary" type="button">
            Book now
          </Button>
        </div>
        <div className="hero__image">
          <img
            src="./imgs/coffee4.jpg"
            alt="Coffee"
            className="hero__image-src"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
