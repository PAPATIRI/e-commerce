import PropTypes from 'prop-types';

const Button = ({ type, children, onClick, small, secondary, danger, dangerSecondary }) => {
  if (danger) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full rounded border-2 border-red-400 bg-red-400 capitalize text-white transition-all duration-500 hover:bg-red-400/90 ${
          small ? 'py-1 px-3 text-base' : 'py-3'
        } ${
          dangerSecondary &&
          'border-2 border-red-200 bg-transparent text-slate-500 hover:bg-red-100/80 hover:text-red-700'
        }`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full transition-all duration-500 ${
        small ? 'py-1 px-3 text-base' : 'py-3 text-xl'
      } ${
        secondary
          ? 'border-2 border-blue-200 bg-transparent text-slate-500 hover:bg-blue-100/80 hover:text-blue-700'
          : ' rounded border-2 border-blue-500 bg-blue-500  capitalize text-white hover:bg-blue-500/90'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  dangerSecondary: PropTypes.bool
};
