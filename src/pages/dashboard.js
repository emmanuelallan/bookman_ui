import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-20">
        <SideBar />
        <main className="w-full lg:pl-52 xl:pl-56">
          <div className="p-5 md:p-8 h-full"></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
