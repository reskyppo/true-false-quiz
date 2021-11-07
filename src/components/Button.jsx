import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({ url, text, onClick, size }) => {
  return (
    <button
      className="bg-secondary-300 rounded-md cursor-pointer"
      style={{ width: size * 100 + "%" }}
      onClick={onClick}
    >
      {url ? (
        <Link to={url}>
          <p className="py-4 text-center text-2xl font-medium text-white">
            {text}
          </p>
        </Link>
      ) : (
        <p className="py-4 text-center text-2xl font-medium text-white">
          {text}
        </p>
      )}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["0", "1/6", "2/6", "3/6", "4/6", "5/6", "6/6"]),
};

export default Button;
