import { Link } from 'react-router-dom';
import { BsJournalPlus } from 'react-icons/bs';
import logo from '../assets/img/logo.svg';
import menu from '../assets/img/menu.svg';
import avatar from '../assets/img/avatar.svg';

const Navbar = () => (
  <header className="fixed z-40 w-full bg-white shadow">
    <nav className="flex items-center justify-between px-5 py-4 md:px-8">
      <button className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent lg:hidden">
        <img src={menu} alt="menu" />
      </button>
      <div className="hidden md:flex me-auto">
        <Link to="/" className="inline-flex">
          <img src={logo} alt="logo" className="inline-flex" />
        </Link>
      </div>
      <div className="flex items-center space-s-8">
        <Link
          to="/"
          className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow bg-accent text-light border border-transparent hover:bg-accentH px-3 py-0 h-9 text-sm h-10 ms-4 md:ms-6 ms-4 md:ms-6"
        >
          <BsJournalPlus /> <span className="ml-2">Add Book</span>
        </Link>
        <div className="relative inline-block text-left ml-6">
          <button
            type="button"
            className="flex items-center focus:outline-none"
          >
            <div className='class="relative cursor-pointer w-10 h-10 overflow-hidden rounded-full border border-border-100'>
              <img src={avatar} alt="avatar" />
            </div>
          </button>
          <ul className="absolute end-0 w-48 mt-1 origin-top-end bg-white rounded shadow-md right-0 focus:outline-none">
            <li className="w-full flex flex-col space-y-1 bg-[#00b791] text-white text-sm rounded-t px-4 py-3">
              <span className="font-semibold capitalize">admin</span>
              <span class="text-xs">admin@demo.com</span>
            </li>
            <li className="border-b border-gray-100 cursor-pointer last:border-0">
              <Link
                to="/"
                className="block px-4 py-3 text-sm capitalize font-semibold transition duration-200 hover:text-accent text-heading"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
