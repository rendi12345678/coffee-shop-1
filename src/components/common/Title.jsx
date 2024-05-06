const Title = ({ children, className, title, textAlign = "left" }) => {
  return (
    <div className={`${className} title title--${textAlign}-text`}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
export default Title;
