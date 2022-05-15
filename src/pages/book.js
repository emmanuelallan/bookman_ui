import { BsSearch, BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';
import atomic from '../assets/img/atomic.jpeg';

const Book = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-20">
        <SideBar />
        <main className="w-full lg:pl-52 xl:pl-56">
          <div className="p-5 md:p-8 h-full">
            <div className="p-5 md:p-8 bg-light shadow rounded flex flex-col mb-8">
              <div className="w-full flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h1 className="text-lg font-semibold text-heading">Books</h1>
                </div>
                <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center">
                  <div className="w-full flex items-center">
                    <form
                      noValidate
                      className="w-full flex items-center relative"
                    >
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <button
                        type="button"
                        className="absolute p-2 ml-1 outline-none start-1 focus:outline-none active:outline-none text-body"
                      >
                        <span className="w-5 h-5">
                          <BsSearch />
                        </span>
                      </button>
                      <input
                        type="text"
                        name="searchText"
                        className="pl-10 pr-8 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent"
                        placeholder="Type your query and press enter"
                        autoComplete="off"
                      />
                    </form>
                    <Link
                      className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 ms-4 md:ms-6 ml-4 md:ml-6"
                      to="/createBook"
                    >
                      <span className="hidden md:block">+ Add Book</span>
                      <span className="md:hidden">+ Add</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 overflow-hidden rounded shadow">
              <table className="table-auto w-full relative text-xs border-separate text-slate-500 overflow-auto">
                <thead>
                  <tr>
                    <th className="bg-thead whitespace-nowrap p-3 text-sm font-semibold text-textHeading text-left">
                      Image
                    </th>
                    <th className="bg-thead whitespace-nowrap p-3 text-sm font-semibold text-textHeading text-left">
                      Title
                    </th>
                    <th className="bg-thead whitespace-nowrap p-3 text-sm font-semibold text-textHeading text-left">
                      Author
                    </th>
                    <th className="bg-thead whitespace-nowrap p-3 text-sm font-semibold text-textHeading text-left">
                      Category
                    </th>
                    <th className="bg-thead whitespace-nowrap p-3 text-sm font-semibold text-textHeading text-left">
                      Price/Unit
                    </th>
                    <th className="bg-thead whitespace-nowrap p-3 text-sm font-semibold text-textHeading text-left">
                      Qnty. Stock
                    </th>
                    <th className="bg-thead whitespace-nowrap p-3 text-sm font-semibold text-textHeading text-left">
                      Status
                    </th>
                    <th className="bg-thead whitespace-nowrap p-3 text-sm font-semibold text-textHeading text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-light text-left py-4 px-3 text-sm text-textColor font-normal break-words">
                      <img src={atomic} alt="atomic" width={42} height="auto" />
                    </td>
                    <td className="bg-light text-left py-4 px-3 text-sm text-textColor font-normal break-words">
                      Atomic Habits
                    </td>
                    <td className="bg-light text-left py-4 px-3 text-sm text-textColor font-normal break-words">
                      James Clear
                    </td>
                    <td className="bg-light text-left py-4 px-3 text-sm text-textColor font-normal break-words">
                      Self Help
                    </td>
                    <td className="bg-light text-left py-4 px-3 text-sm text-textColor font-normal break-words">
                      KES. 1,000
                    </td>
                    <td className="bg-light text-left py-4 px-3 text-sm text-textColor font-normal break-words">
                      346
                    </td>
                    <td className="bg-light text-left py-4 px-3 text-sm text-textColor font-normal break-words">
                      <span className="px-3 py-1 rounded-full text-xs whitespace-nowrap relative text-light bg-accent">
                        published
                      </span>
                    </td>
                    <td className="bg-light text-left py-4 px-3 text-sm text-textColor font-normal break-words">
                      <div className="inline-flex items-center w-auto">
                        <button
                          type="button"
                          className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none text-lg"
                          title="Delete"
                        >
                          <BsFillTrashFill />
                        </button>
                        <Link
                          className="text-lg transition duration-200 hover:text-heading ml-5"
                          title="Edit"
                          to="/editBook"
                        >
                          <BsPencilSquare />
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Book;
