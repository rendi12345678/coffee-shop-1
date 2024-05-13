import Button from "./Button";

const FeaturedProductItem = ({ id, name, description, image }) => {
  return (
    <div className="featured-products__item" data-id={id}>
      <img src={image} alt={name} className="featured-products__image" />
      <div className="featured-products__info">
        <h5 className="featured-products__info__title">{name}</h5>
        <p className="featured-products__description">{description}</p>
        <p className="featured-products__reviews small-text">
          <span className="star">&#9733;</span> 5.00 (1k reviews)
        </p>
        <div className="featured-products__price-and-btn">
          <p className="featured-products__price">
            Price: <strong>$25</strong>
          </p>
          <Button
            className="featured-products__button"
            type="button"
            variant="primary"
            size="medium"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductItem;
