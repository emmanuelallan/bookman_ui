import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';

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
                      className='class="w-full flex items-center relative'
                    ></form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Book;
