import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function MainButton({ text, buttonClass, to }) {
  MainButton.propTypes = {
    text: PropTypes.string,
    buttonClass: PropTypes.string,
    to:PropTypes.string
  };
  return <Link to={to} className={`${buttonClass} block`}>{text}</Link>;
}
