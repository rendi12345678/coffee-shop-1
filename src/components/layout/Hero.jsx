import Container from "../common/Container";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Container className="hero__container">
        <div className="hero__info">
          <h6 className="hero__sub-title primary-text">Coffee Shop</h6>
          <h1 className="hero__title">
            Keep your dreams aroused with a cup of coffee
          </h1>
          <p className="hero__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            veritatis, distinctio recusandae provident earum atque ex voluptates
            ullam quas. Maiores?
          </p>
          <Button className="hero__button" variant="primary" type="button">
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
