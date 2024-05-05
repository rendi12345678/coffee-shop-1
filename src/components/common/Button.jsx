const Button = ({
  onClick,
  children,
  color,
  type,
  className = "",
  size = "big",
}) => {
  const buttonClassName = `button ${color}-btn ${className} ${size}-btn`;

  return (
    <button className={buttonClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
