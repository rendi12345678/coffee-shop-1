import WhyWeAreSpecialListItem from "./WhyWeAreSpecialListItem";

const products = [
  {
    id: 1,
    name: "Arabica Black Coffee",
    description:
      "LLorem ipsum dolor sit amet, consectetur adipiscing elit.centerorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./imgs/coffee3.jpg",
  },
  {
    id: 2,
    name: "Arabica Cappucino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing ecenterliLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.t.",
    image: "./imgs/coffee5.jpg",
  },
  {
    id: 3,
    name: "Arabica Black Coffee",
    description:
      "LLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.orem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./imgs/coffee4.jpg",
  },
];

const WhyWeAreSpecialList = ({ baseClassName }) => {
  return (
    <div className={`${baseClassName}__list`}>
      {products.map(({ id, name, description, image }, key) => (
        <WhyWeAreSpecialListItem
          key={key}
          id={id}
          name={name}
          description={description}
          image={image}
          baseClassName={baseClassName}
        />
      ))}
    </div>
  );
};

export default WhyWeAreSpecialList;
