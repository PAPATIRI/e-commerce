import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className="px-[5%] md:px-[10%] lg:px-[15%]">{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.element
};
