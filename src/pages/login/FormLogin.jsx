import { Button, Gap, Input, Label } from '../../components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FormLogin = ({ onSubmit }) => {
  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" text="email" />
        <Input placeholder="email anda" type="email" name="email" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" text="kata sandi" />
        <Input placeholder="kata sandi" type="password" name="password" />
      </div>
      <Gap height={20} />
      <Button type="submit">login</Button>
      <Gap height={2} />
      <p className="text-center text-base">
        belum punya akun?{' '}
        <Link to={'/register'} className="text-blue-400">
          daftar disini
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;

FormLogin.propTypes = {
  onSubmit: PropTypes.func
};
