import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/form/input';
import Label from '../components/form/label';
import Button from '../components/button';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { registerStore } from '../app/features/auth/authSlice';
import isEqual from 'lodash/isEqual';
import logo from '../assets/img/logo.svg';

const Register = () => {
  let navigate = useNavigate();
  const [error, setError] = useState({
    storeName: '',
    email: '',
    password: '',
    storeNameValid: false,
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

    if (isEqual(name, 'storeName')) {
      if (validator.isEmpty(value)) {
        setError((prevState) => ({
          ...prevState,
          storeName: 'Store name is required!',
          storeNameValid: false,
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          storeName: '',
          storeNameValid: true,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if error
    if (error.emailValid && error.passwordValid) {
      // handle form
      const { storeName, email, password } = e.target.elements;

      await dispatch(
        registerStore({
          storeName: storeName.value,
          email: email.value,
          password: password.value,
          role: 'admin',
        })
      );

      e.target.elements.password.value = '';
      e.target.elements.storeName.value = '';
      e.target.elements.email.value = '';

      navigate('/', { replace: true, user });
    }
  };
  return (
    <main className="flex items-center justify-center h-screen bg-light sm:bg-gray-100">
      <div className="m-auto max-w-md w-full bg-light sm:shadow p-5 sm:p-8 rounded-md">
        <div className="flex justify-center mb-2">
          <img src={logo} alt="logo" className="inline-flex" />
        </div>
        <h3 className="text-center text-base italic text-body mb-6 mt-4">
          Register new account
        </h3>
        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label name="storeName" title="Store Name" />
            <Input name="storeName" type="text" handleChange={handleChange} />
            {error.storeName && (
              <p className="my-2 text-xs text-start text-red-500">
                {error.storeName}
              </p>
            )}
          </div>

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
            <Label name="password" title="Password" />
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

export default Register;
