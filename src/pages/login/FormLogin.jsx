import { Button, Gap, Input, Label } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, reset } from '../../features/authSlice';

const FormLogin = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isLoading, isSuccess, message, user } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  return (
    <div>
      {isError && <p className="text-base text-red-500">{message}</p>}
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
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
          <div>{isLoading ? 'loading...' : 'login'}</div>
        </Button>
        <Gap height={2} />
        <p className="text-center text-base">
          belum punya akun?{' '}
          <Link to={'/register'} className="text-blue-400">
            daftar disini
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormLogin;

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.object
};
