import Button from "../common/Button";
import Container from "../common/Container";
import Title from "../common/Title";

const OurCoffee = () => {
  return (
    <section className="our-coffee">
      <Container className="our-coffee__container">
        <div className="our-coffee__image">
          <img src="/imgs/coffee5.jpg" alt="Coffee" />
        </div>
        <div className="our-coffee__info">
          <h6 className="our-coffee__sub-title primary-text">Our coffee</h6>
          <Title
            className="our-coffee__title"
            title="Choose your favourite coffee"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            tempore natus incidunt obcaecati consequuntur modi beatae odio minus
            perferendis soluta!
          </Title>
          <ul className="our-coffee__coffee-list">
            <li className="item primary-text">
              <h6>Frapuccino</h6>
            </li>
            <li className="item">
              <h6>Arabica</h6>
            </li>
            <li className="item">
              <h6>Capuccino</h6>
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
