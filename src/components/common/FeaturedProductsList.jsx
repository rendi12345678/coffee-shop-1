import FeaturedProductItem from "./FeaturedProductItem";

const products = [
  {
    id: 1,
    name: "Arabica Black Coffee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./imgs/coffee3.jpg",
  },
  {
    id: 2,
    name: "Arabica Cappucino",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./imgs/coffee5.jpg",
  },
  {
    id: 3,
    name: "Arabica Black Coffee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./imgs/coffee4.jpg",
  },
];

const FeaturedProductsList = () => {
  return (
    <div className="featured-products__list">
      {products.map(({ id, name, description, image }, key) => (
        <FeaturedProductItem
          key={key}
          id={id}
          name={name}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default FeaturedProductsList;
