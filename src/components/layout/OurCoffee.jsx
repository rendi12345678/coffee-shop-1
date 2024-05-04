import Button from "../common/Button";
import Container from "../common/Container";

const OurCoffee = () => {
  return (
    <section className="our-coffee">
      <Container className="our-coffee__container">
        <div className="our-coffee__image">
          <img src="/imgs/coffee5.jpg" alt="Coffee" />
        </div>
        <div className="our-coffee__info">
          <h6 className="our-coffee__sub-title primary-text">Our coffee</h6>
          <h1 className="our-coffee__title">Chose your favourite coffee</h1>
          <p className="our-coffee__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nisi ut euismod ultrices, mi risus suscipit libero, sed
            ultricies odio nulla id lacus.
          </p>
          <ul className="our-coffee__coffee-list">
            <li className="item primary-text">
              <p>Frapuccino</p>
            </li>
            <li className="item">
              <p>Arabica</p>
            </li>
            <li className="item">
              <p>Capuccino</p>
            </li>
          </ul>
          <Button color="primary" type="button">
            More menu
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OurCoffee;
