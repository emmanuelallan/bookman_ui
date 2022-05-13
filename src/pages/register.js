import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Input from '../components/form/input';
import Label from '../components/form/label';
import Button from '../components/button';

const Login = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-light sm:bg-gray-100">
      <div className="m-auto max-w-md w-full bg-light sm:shadow p-5 sm:p-8 rounded-md">
        <div className="flex justify-center mb-2">
          <img
            src={logo}
            alt="logo"
            className="inline-flex"
            width={92}
            height={32}
          />
        </div>
        <h3 className="text-center text-base italic text-body mb-6 mt-4">
          Register new account
        </h3>
        <form noValidate>
          <div className="mb-4">
            <Label name="store_name" title="Store Name" />
            <Input name="store_name" type="text" />
          </div>

          <div className="mb-4">
            <Label name="email" title="Email" />
            <Input name="email" type="email" />
          </div>

          <div className="mb-4">
            <Label name="password" title="Password" />
            <Input name="password" type="password" />
          </div>

          <Button value="Register" />

          <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
            <hr className="w-full" />
            <span className="absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light">
              Or
            </span>
          </div>

          <div className="text-sm sm:text-base text-body text-center">
            Already have an account?{' '}
            <Link
              className="ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-700 hover:no-underline focus:no-underline"
              to="/"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
