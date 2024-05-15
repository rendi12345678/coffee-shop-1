import TestimonialsProvider from "../../providers/TestimonialsProvider";
import FeaturedProducts from "../layout/FeaturedProducts";
import Footer from "../layout/Footer";
import Hero from "../layout/Hero";
import Location from "../layout/Location";
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
      <TestimonialsProvider>
        <Testimonials />
      </TestimonialsProvider>
      <Location />
      <Footer />
    </>
  );
}

export default Home;
