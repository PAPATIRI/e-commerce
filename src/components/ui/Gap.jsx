import PropTypes from 'prop-types';

const Gap = ({ height, width }) => {
  return <div style={{ height: `${height}px`, width: `${width}px` }}></div>;
};

export default Gap;

Gap.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};
