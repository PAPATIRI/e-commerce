import { Link } from 'react-router-dom';
import Gap from '../components/ui/Gap';

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-100">
      <div className="mx-[5%] flex h-[60%] items-center overflow-hidden rounded-lg bg-white shadow-lg lg:mx-[20%]">
        <div className="hidden h-full flex-1 overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold text-gray-800 md:text-4xl">Login</h1>
          <Gap height={40} />
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-medium capitalize text-gray-700">
                email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email anda"
                className="rounded border-2 py-3 px-4"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-lg font-medium capitalize text-gray-700">
                password
              </label>
              <input
                type="password"
                name="password"
                placeholder="email anda"
                className="rounded border-2 py-3 px-4"
                required
              />
            </div>
            <Gap height={20} />
            <button
              type="submit"
              className="rounded bg-blue-500 py-3 px-4 text-xl capitalize text-white"
            >
              login
            </button>
            <Gap height={2} />
            <p className="text-center text-base">
              belum punya akun?{' '}
              <Link to={'/register'} className="text-blue-400">
                daftar disini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
