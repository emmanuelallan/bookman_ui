import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';
import { BsBook, BsCollection, BsMailbox } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { FiTrendingUp } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-20">
        <SideBar />
        <main className="w-full lg:pl-52 xl:pl-56">
          <div className="p-5 md:p-8 h-full">
            <div className="w-full mb-14">
              <h1 className="text-2xl sm:text-4xl font-bold">Dashboard</h1>
            </div>
            <div className="w-full grid justify-items-center gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="w-3/4 sm:w-5/6 bg-white shadow-md rounded-3xl p-8 hover:scale-110 hover:bg-accent hover:text-white transition ease-in-out delay-200">
                <div className="flex flex-col gap-y-10">
                  <div className="p-4 rounded-lg max-w-fit bg-gray-100">
                    <BsCollection className="text-4xl text-black" />
                  </div>
                  <div className=" flex flex-col h-32 justify-end">
                    <h2 className="text-2xl font-bold">All Books</h2>
                    <p className="text-xl mt-6">365</p>
                  </div>
                </div>
              </div>
              <div className="w-3/4 sm:w-5/6 bg-white shadow-md rounded-3xl p-8 hover:scale-110 hover:bg-accent hover:text-white transition ease-in-out delay-200">
                <div className="flex flex-col gap-y-10">
                  <div className="p-4 rounded-lg max-w-fit bg-gray-100">
                    <BsBook className="text-4xl text-black" />
                  </div>
                  <div className=" flex flex-col h-32 justify-end">
                    <h2 className="text-2xl font-bold">Books Sold</h2>
                    <p className="text-xl mt-6">70</p>
                  </div>
                </div>
              </div>
              <div className="w-3/4 sm:w-5/6 bg-white shadow-md rounded-3xl p-8 hover:scale-110 hover:bg-accent hover:text-white transition ease-in-out delay-200">
                <div className="flex flex-col gap-y-10">
                  <div className="p-4 rounded-lg max-w-fit bg-gray-100">
                    <BsMailbox className="text-4xl text-black" />
                  </div>
                  <div className=" flex flex-col h-32 justify-end">
                    <h2 className="text-2xl font-bold">Total Orders</h2>
                    <p className="text-x mt-6">100</p>
                  </div>
                </div>
              </div>
              <div className="w-3/4 sm:w-5/6 bg-white shadow-md rounded-3xl p-8 hover:scale-110 hover:bg-accent hover:text-white transition ease-in-out delay-200">
                <div className="flex flex-col gap-y-10">
                  <div className="p-4 rounded-lg max-w-fit bg-gray-100">
                    <GrMoney className="text-4xl text-black" />
                  </div>
                  <div className=" flex flex-col h-32 justify-end">
                    <h2 className="text-2xl font-bold">Revenue</h2>
                    <p className="text-xl mt-6">Ksh: 10,000</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Data Table */}
            <div className=" overflow-hidden mt-16 sm:mt-40 lg:mt-52">
              <div className="bg-white px-4 py-5 sm:px-6 flex justify-between items-center sm:justify-start sm:gap-12">
                <h3 className="text-2xl sm:text-4xl font-bold">Top trending books</h3>
                <FiTrendingUp className="text-2xl sm:text-4xl text-black" />
              </div>
              <div className="border-t mt-10 border-gray-200">
                <dl>
                  <div className="border-b border-gray-200  px-4 py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-6 odd:bg-white even:bg-gray-50">
                    <dt className="text-xl lg:text-2xl font-bold md:col-span-2">Name</dt>
                    <dd className="text-xl lg:text-2xl font-bold">Total Sold</dd>
                  </div>
                  <div className="px-4 py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-6 odd:bg-white even:bg-gray-50">
                    <dt className="text-base lg:text-xl md:col-span-2">Atomic habits</dt>
                    <dd className="text-base lg:text-xl">40</dd>
                  </div>
                  <div className="px-4 py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-6 odd:bg-white even:bg-gray-50">
                    <dt className="text-base lg:text-xl md:col-span-2">Give and wake</dt>
                    <dd className="text-base lg:text-xl">20</dd>
                  </div>
                  <div className="px-4 py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-6 odd:bg-white even:bg-gray-50">
                    <dt className="text-base lg:text-xl md:col-span-2">Start with why</dt>
                    <dd className="text-base lg:text-xl">20</dd>
                  </div>
                  <div className="px-4 py-5 grid grid-cols-2 md:grid-cols-3 gap-4 px-6 odd:bg-white even:bg-gray-50">
                    <dt className="text-base lg:text-xl md:col-span-2">Shoe dog</dt>
                    <dd className="text-base lg:text-xl">20</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
};

export default Dashboard;
