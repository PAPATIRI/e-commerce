import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Gap from '../ui/Gap';
import PropTypes from 'prop-types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import shortifyName from '../../utils/shortifyText';

const UserData = ({ onClick, showModal, count, user, onLogout }) => {
  return (
    <div className="relative flex items-center gap-6">
      <div className="relative">
        <AiOutlineShoppingCart className="cursor-pointer text-slate-700" size={24} />
        <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
          <p className="text-sm text-slate-100">{count}</p>
        </div>
      </div>
      {Object.keys(user).length > 0 ? (
        <>
          <div className="flex cursor-pointer items-center gap-2" onClick={onClick}>
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}${user?.img ? user?.img.url : ''}`}
              alt="user pict"
              className="h-[36px] w-[36px] rounded-full object-cover"
            />
            <p className="text-base text-slate-700">
              {user?.username ? shortifyName(user.username) : ''}
            </p>
          </div>
          <div
            className={`absolute top-10 right-0 bg-slate-100 p-4 shadow ${
              showModal ? 'block' : 'hidden'
            }`}
          >
            <Link
              to={'/profile/:id'}
              className="rounded py-2 px-4 font-medium text-slate-700 hover:bg-slate-200"
            >
              profile
            </Link>
            <Gap height={10} />
            <Button
              danger
              small
              onClick={onLogout}
              type="button"
              className="font-medium text-slate-700"
            >
              logout
            </Button>
          </div>
        </>
      ) : (
        <div className="flex w-40 items-center gap-1">
          <Link to={'/register'}>
            <Button small type="button">
              daftar
            </Button>
          </Link>
          <Link to={'/login'}>
            <Button secondary small type="button">
              login
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserData;

UserData.propTypes = {
  onClick: PropTypes.func,
  showModal: PropTypes.bool,
  count: PropTypes.number,
  user: PropTypes.object,
  onLogout: PropTypes.func
};
