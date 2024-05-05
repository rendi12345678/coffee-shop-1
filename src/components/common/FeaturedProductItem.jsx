import Button from "./Button";

const FeaturedProductItem = ({ id, name, description, image, className }) => {
  return (
    <div className={className} data-id={id}>
      <img src={image} alt={name} className={`${className}__image`} />
      <h3 className={`${className}__title`}>{name}</h3>
      <p className={`${className}__description`}>{description}</p>
      <Button type="button" color="primary" className={`${className}__button`}>
        Buy Now
      </Button>
    </div>
  );
};

export default FeaturedProductItem;
