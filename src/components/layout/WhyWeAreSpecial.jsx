import Container from "../common/Container";
import Title from "../common/Title";
import WhyWeAreSpecialList from "../common/WhyWeAreSpecialList";

const WhyWeAreSpecial = () => {
  return (
    <section className="why-we-are-special">
      <Container>
        <Title
          className="why-we-are-special__title"
          title="Why We Are Special"
          textAlign="center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          debitis pariatur omnis fugiat dolorem repellendus!
        </Title>
        <WhyWeAreSpecialList baseClassName="why-we-are-special" />
      </Container>
    </section>
  );
};

export default WhyWeAreSpecial;
