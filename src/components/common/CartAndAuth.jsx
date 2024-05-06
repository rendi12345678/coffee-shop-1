import Button from "./Button";

const CartAndAuth = ({ className }) => {
  return (
    <div className={className}>
      <Button type="button" size="medium" variant="secondary">
        Sign up
      </Button>
    </div>
  );
};

export default CartAndAuth;
