import FeaturedProductItem from "./FeaturedProductItem";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "product3.jpg",
  },
];

const FeaturedProductsList = ({ className }) => {
  return (
    <div className={className}>
      {products.map(({ id, name, description, image }, key) => (
        <FeaturedProductItem
          key={key}
          className={className}
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
