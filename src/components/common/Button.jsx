const Button = ({
  onClick,
  children,
  variant,
  type,
  className = "",
  size = "big",
}) => {
  const buttonClassName = `button button--${variant} ${className} button--${size}`;

  return (
    <button className={buttonClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
