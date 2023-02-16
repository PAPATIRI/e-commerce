import { Link, useNavigate } from 'react-router-dom';
import { Button, Gap, Input, Label } from '../../components';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, reset } from '../../features/authSlice';

const FormRegister = () => {
  const usernameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isLoading, message, user, isSuccess } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const roleuser = 'customer';

    dispatch(registerUser({ username, email, password, roleuser }));
  };

  useEffect(() => {
    if (user || isSuccess) {
      dispatch(reset());
      navigate('/login');
    }
  }, [user, isSuccess, dispatch, navigate]);

  return (
    <div>
      {isError && <p className="text-base text-red-500">{message}</p>}
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username" text="nama lengkap" />
          <Input refInput={usernameRef} placeholder="nama lengkap" type="text" name="username" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" text="email" />
          <Input refInput={emailRef} placeholder="email anda" type="email" name="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password" text="kata sandi" />
          <Input refInput={passwordRef} placeholder="kata sandi" type="password" name="password" />
        </div>
        <Gap height={20} />
        <Button type="submit">
          <div>{isLoading ? 'loading...' : 'register'}</div>
        </Button>
        <Gap height={2} />
        <p className="text-center text-base">
          sudah punya akun?{' '}
          <Link to={'/login'} className="text-blue-400">
            login disini
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormRegister;

FormRegister.propTypes = {
  onSubmit: PropTypes.func
};
