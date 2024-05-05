import Container from "../common/Container";
import FeaturedProductsList from "../common/FeaturedProductsList";
import Title from "../common/Title";

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <Container className="featured-products__container">
        <Title
          className="featured-products__title"
          title="Our Featured Products"
          textAlign="center"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint itaque
          voluptate, eum accusamus perspiciatis necessitatibus.
        </Title>
        <FeaturedProductsList className="featured-products__list" />
      </Container>
    </section>
  );
};

export default FeaturedProducts;
