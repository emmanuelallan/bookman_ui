import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useState } from 'react';
import { loginStore } from '../redux/auth/auth';
import isEqual from 'lodash/isEqual';
import logo from '../assets/img/logo.svg';
import Input from '../components/form/input';
import Label from '../components/form/label';
import Button from '../components/button';

const Login = () => {
  const location = useLocation();
  const [error, setError] = useState({
    email: '',
    password: '',
    emailValid: false,
    passwordValid: false,
  });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (isEqual(name, 'email')) {
      if (validator.isEmpty(value)) {
        setError((prevState) => ({
          ...prevState,
          email: 'Email is required!',
          emailValid: false,
        }));
      } else {
        if (validator.isEmail(value)) {
          setError((prevState) => ({
            ...prevState,
            email: '',
            emailValid: true,
          }));
        } else {
          setError((prevState) => ({
            ...prevState,
            email: 'The provided email address format is not valid!',
            emailValid: false,
          }));
        }
      }
    }

    if (isEqual(name, 'password')) {
      if (validator.isEmpty(value)) {
        setError((prevState) => ({
          ...prevState,
          password: 'Password is required!',
          passwordValid: false,
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          password: '',
          passwordValid: true,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if error
    if (error.emailValid && error.passwordValid) {
      // handle form
      const { email, password } = e.target.elements;

      dispatch(
        loginStore({
          email: email.value,
          password: password.value,
        })
      );

      e.target.elements.password = '';
    }
  };
  return (
    <main className="flex items-center justify-center h-screen bg-light sm:bg-gray-100">
      <div className="m-auto max-w-md w-full bg-light sm:shadow p-5 sm:p-8 rounded-md">
        <div className="flex justify-center mb-2">
          <img src={logo} alt="logo" className="inline-flex" />
        </div>
        <h3 className="text-center text-base italic text-body mb-6 mt-4">
          Login to admin
        </h3>
        {user.error && (
          <p className="text-center bg-red-50 rounded capitalize py-2 text-red-500 my-5">
            {user.error}
          </p>
        )}

        {location.state && (
          <p className="text-center bg-green-50 rounded capitalize py-2 text-accent my-5">
            {location.state}
          </p>
        )}
        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label name="email" title="Email" />
            <Input name="email" type="email" handleChange={handleChange} />
            {error.email && (
              <p className="my-2 text-xs text-start text-red-500">
                {error.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <Label name="password" title="Password" />
              <Link
                className="text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover"
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                name="password"
                type="password"
                handleChange={handleChange}
              />

              {error.password && (
                <p className="my-2 text-xs text-start text-red-500">
                  {error.password}
                </p>
              )}
            </div>
          </div>

          <Button value="Login" />

          <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
            <hr className="w-full" />
            <span className="absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light">
              Or
            </span>
          </div>

          <div className="text-sm sm:text-base text-body text-center">
            Don't have any account?{' '}
            <Link
              className="ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-700 hover:no-underline focus:no-underline"
              to="/register"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
