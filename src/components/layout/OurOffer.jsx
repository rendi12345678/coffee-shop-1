import { useEffect } from "react";
import Button from "../common/Button";
import Container from "../common/Container";

const OurOffer = () => {
  return (
    <section className="our-offer">
      <Container className="our-offer__container">
        <div className="our-offer__info">
          <h6 className="our-offer__sub-title primary-text">Our Offer</h6>
          <h2 className="our-offer__title">
            Get 20% Discount Of Your First Order
          </h2>
          <p className="our-offer__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            veritatis, distinctio recusandae provident earum atque ex voluptates
            ullam quas. Maiores?
          </p>
          <Button
            className="our-offer__button"
            type="button"
            variant="primary"
            size="big"
          >
            View menu
          </Button>
        </div>
        <div className="our-offer__image">
          <img src="/imgs/coffee4.jpg" alt="Coffee" />
        </div>
      </Container>
    </section>
  );
};

export default OurOffer;
