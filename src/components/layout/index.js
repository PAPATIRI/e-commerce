import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element
};
