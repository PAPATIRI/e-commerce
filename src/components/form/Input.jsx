import PropTypes from 'prop-types';

const Input = ({ type, refInput, placeholder, name, rounded }) => {
  return (
    <input
      type={type}
      name={name}
      ref={refInput}
      placeholder={placeholder}
      className={`rounded border-2 bg-slate-100 py-3 px-4 focus:border-slate-400 focus:outline-slate-400 ${
        rounded && 'rounded-full'
      }`}
      autoComplete="off"
      required
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rounded: PropTypes.bool,
  refInput: PropTypes.object
};
