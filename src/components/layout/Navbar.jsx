import { useEffect, useState } from 'react';
import UserData from './UserData';
import SearchForm from './SearchForm';
import Logo from './Logo';
import Container from '../ui/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getMe, logoutUser } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { userData, isError } = useSelector((state) => state.auth);
  const jwt = JSON.parse(localStorage.getItem('jwt'));
  const userProfile = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  useEffect(() => {
    dispatch(getMe(jwt));
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    }
  }, []);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-center bg-slate-100 shadow">
      <Container>
        <div className="flex w-full items-center justify-between">
          <Logo />
          <SearchForm />
          <UserData
            user={userProfile ? userProfile : {}}
            count={2}
            onLogout={onLogout}
            showModal={showModal}
            onClick={() => setShowModal(!showModal)}
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
