const workingHours = [
  { days: "Mon - Fri", hours: "7am - 7pm" },
  { days: "Sat", hours: "Closed" },
  { days: "Sun", hours: "8am - 5pm" },
];

const contactInfo = [
  {
    title: "Location",
    text: "123 Coffee St.",
  },
  {
    title: "Email",
    text: "info@coffeeshop.com",
  },
  {
    title: "Phone",
    text: "(123) 456-7890",
  },
];

const socialMedia = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    imgSrc: "/imgs/facebook.png",
  },
  { name: "Twitter", url: "https://twitter.com", imgSrc: "/imgs/twitter.png" },
  {
    name: "Instagram",
    url: "https://instagram.com",
    imgSrc: "/imgs/instagram.png",
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com",
    imgSrc: "/imgs/linkedin.png",
  },
];

const useFooter = () => {
  return { workingHours, contactInfo, socialMedia };
};

export default useFooter;
