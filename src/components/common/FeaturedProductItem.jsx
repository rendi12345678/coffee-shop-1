import Button from "./Button";

const FeaturedProductItem = ({ id, name, description, image }) => {
  return (
    <div className="featured-products__item" data-id={id}>
      <img src={image} alt={name} className="featured-products__image" />
      <div className="featured-products__info">
        <h5 className="featured-products__info__title">{name}</h5>
        <p className="featured-products__description">{description}</p>

        <div className="featured-products__price-and-btn">
          <p className="featured-products__price">
            Price: <strong>$50</strong>
          </p>
          <Button
            className="featured-products__button"
            type="button"
            color="primary"
            size="medium"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductItem;
