import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

const Navbar = () => (
  <header className="fixed z-40 w-full bg-white shadow">
    <nav className="flex items-center justify-between px-5 py-4 md:px-8">
      <button className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent lg:hidden">
        Menu
      </button>
      <div className="hidden md:flex me-auto">
        <Link to="/" className="inline-flex">
          <img
            src={logo}
            alt="logo"
            className="inline-flex"
            width={92}
            height={32}
          />
        </Link>
      </div>
      <div className="flex items-center space-s-8">
        <Link
          to="/"
          className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow bg-accent text-light border border-transparent hover:bg-accent-hover px-3 py-0 h-9 text-sm h-10 ms-4 md:ms-6 ms-4 md:ms-6"
        >
          Add Book
        </Link>
        <div className="relative inline-block text-left"></div>
      </div>
    </nav>
  </header>
);

export default Navbar;
