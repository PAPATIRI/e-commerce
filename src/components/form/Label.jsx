import PropTypes from 'prop-types';

const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="text-lg font-medium capitalize text-gray-700">
      {text}
    </label>
  );
};

export default Label;

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string
};
