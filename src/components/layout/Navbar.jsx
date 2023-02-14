import { useState } from 'react';
import UserData from './UserData';
import SearchForm from './SearchForm';
import Logo from './Logo';
import Container from '../ui/Container';

const user = {
  name: 'syarif taufik hidayat',
  img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
};

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-slate-100 shadow">
      <Container>
        <div className="flex w-full items-center justify-between py-2">
          <Logo />
          <SearchForm />
          <UserData
            user={user}
            count={2}
            showModal={showModal}
            onClick={() => setShowModal(!showModal)}
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
