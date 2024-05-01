import { HashLink as Link } from "react-router-hash-link";

const MenuItem = ({ to, text, onClick }) => {
  return (
    <li className="navbar__menu-item">
      <Link
        smooth
        to={`#${to}`}
        className="navbar__menu-link"
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
