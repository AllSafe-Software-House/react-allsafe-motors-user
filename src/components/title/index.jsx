import PropTypes from "prop-types";
export default function MainTitle({className, text}) {
    console.log('className: ', className);
    return (
        <h2 className={`mb-4 ${className}`}>{text}</h2>
    )
}

MainTitle.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
  };
  