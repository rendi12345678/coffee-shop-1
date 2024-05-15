import React from "react";
import Container from "../common/Container";
import CoffeeShopInfo from "../common/CoffeeShopInfo";
import SocialMediaLinks from "../common/SocialMediaLinks";
import WorkingHours from "../common/WorkingHours";
import ContactInfo from "../common/ContactInfo";
import useFooter from "../../hooks/useFooter";

const Footer = () => {
  const { workingHours, contactInfo, socialMedia } = useFooter();

  return (
    <footer className="footer">
      <Container className="footer__container">
        <div className="footer__container-content">
          <CoffeeShopInfo />
          <WorkingHours workingHours={workingHours} />
          <ContactInfo contactInfo={contactInfo} />
          <SocialMediaLinks socialMedia={socialMedia} />
        </div>
        <p className="footer__copyright">
          © Copyright 2024. Rendi Virgantara Setiawan
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
