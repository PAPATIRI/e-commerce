import PropTypes from 'prop-types';

const Button = ({ type, children, onClick, small, secondary }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full rounded border-2 border-blue-500 bg-blue-500 py-3 text-xl capitalize text-white transition-all duration-500 hover:bg-blue-500/90 ${
        small && 'py-1 px-3 text-base'
      } ${
        secondary &&
        'border-2 border-blue-200 bg-transparent text-slate-500 hover:bg-blue-100/80 hover:text-blue-700'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  small: PropTypes.bool,
  secondary: PropTypes.bool
};
