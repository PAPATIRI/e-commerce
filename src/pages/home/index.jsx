import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Gap } from '../../components';
import ProductList from './ProductList';

const Home = () => {
  const { isError } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="h-full w-full bg-slate-100 pt-24">
      <Container>
        <div>
          <ProductList />
          <Gap height={50} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
