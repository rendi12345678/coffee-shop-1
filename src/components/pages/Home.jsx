import FeaturedProducts from "../layout/FeaturedProducts";
import Hero from "../layout/Hero";
import OurCoffee from "../layout/OurCoffee";
import OurOffer from "../layout/OurOffer";
import Testimonials from "../layout/Testimonials";
import WhyWeAreSpecial from "../layout/WhyWeAreSpecial";

function Home() {
  return (
    <>
      <Hero />
      <OurCoffee />
      <FeaturedProducts />
      <WhyWeAreSpecial />
      <OurOffer />
      <Testimonials />
    </>
  );
}

export default Home;
