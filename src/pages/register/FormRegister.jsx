import { Link } from 'react-router-dom';
import { Button, Gap, Input, Label } from '../../components';
import PropTypes from 'prop-types';

const FormRegister = ({ onSubmit }) => {
  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="username" text="nama lengkap" />
        <Input placeholder="nama lengkap" type="username" name="username" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" text="email" />
        <Input placeholder="email anda" type="email" name="email" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" text="kata sandi" />
        <Input placeholder="kata sandi" type="password" name="password" />
      </div>
      <Gap height={20} />
      <Button type="submit">daftar</Button>
      <Gap height={2} />
      <p className="text-center text-base">
        sudah punya akun?{' '}
        <Link to={'/login'} className="text-blue-400">
          login disini
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;

FormRegister.propTypes = {
  onSubmit: PropTypes.func
};
