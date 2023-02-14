import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="text-xl font-bold text-blue-400 lg:text-2xl">
      E<span className="text-slate-700">-Commerce</span>
    </Link>
  );
};

export default Logo;
