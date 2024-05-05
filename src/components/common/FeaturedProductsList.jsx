import FeaturedProductItem from "./FeaturedProductItem";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./imgs/coffee5.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./imgs/coffee5.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./imgs/coffee5.jpg",
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
