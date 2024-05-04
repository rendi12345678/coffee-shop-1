const Button = ({ onClick, children, color, type, className = "" }) => {
  const buttonClassName = `button ${color}-btn ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;