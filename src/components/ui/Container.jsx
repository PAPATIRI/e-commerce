import PropTypes from 'prop-types';

const Container = ({ children, large }) => {
  return (
    <div
      className={`w-full px-[5%] ${large ? 'md:px-[20%] lg:px-[25%]' : 'md:px-[10%] lg:px-[15%]'}`}
    >
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.element,
  large: PropTypes.bool
};
