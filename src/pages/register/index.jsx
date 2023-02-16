import { Gap } from '../../components';
import FormRegister from './FormRegister';

const Register = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-100">
      <div className="mx-[5%] flex h-[65%] items-center overflow-hidden rounded-lg bg-white shadow-lg lg:mx-[20%]">
        <div className="hidden h-full flex-1 overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold capitalize text-gray-800 md:text-4xl">Daftar Akun</h1>
          <Gap height={40} />
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
