import Container from "../common/Container";

const OurOffer = () => {
  return (
    <section className="out-offer">
      <Container className="out-offer__container">
        <div className="out-offer__info">
          <h6 className="out-offer__sub-title">Our Offer</h6>
          <h2 className="out-offer__title">Tesss</h2>
          <p className="out-offer__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae iste debitis impedit beatae omnis veritatis ex harum
            ullam perspiciatis id.
          </p>
        </div>
        <div className="out-offer__image">
          <img src="/imgs/coffee5.jpg" alt="Coffee" />
        </div>
      </Container>
    </section>
  );
};

export default OurOffer;
