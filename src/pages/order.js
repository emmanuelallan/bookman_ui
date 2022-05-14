import { BsSearch } from 'react-icons/bs';
import Label from '../components/form/label';
import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-20">
        <SideBar />
        <main className="w-full lg:pl-52 xl:pl-56">
          <div className="p-5 md:p-8 h-full">
            <div className="p-5 md:p-8 bg-light shadow rounded flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h1 className="text-lg font-semibold text-heading">Orders</h1>
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center ms-auto">
                <form
                  noValidate
                  className='class="w-full flex items-center relative"'
                >
                  <Label title="Search" name="search" />
                  <button class="absolute p-2 outline-none start-1 focus:outline-none active:outline-none text-body">
                    <BsSearch />
                  </button>
                  <input
                    type="text"
                    className="ps-10 pe-8 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent"
                    placeholder="Type your query and press enter"
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>
            <div className="mb-6 overflow-hidden rounded shadow">
              <div className="rc-table rc-table-ping-right rc-table-scroll-horizontal">
                <div className="rc-table-container"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Order;
