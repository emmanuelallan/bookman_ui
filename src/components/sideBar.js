import { Link } from 'react-router-dom';
import { BsColumnsGap } from 'react-icons/bs';

const SideBar = () => (
  <aside className="shadow w-72 xl:w-56 hidden lg:block overflow-y-auto bg-white px-4 fixed start-0 bottom-0 h-full pt-20">
    <div className="flex flex-col space-y-6 py-3">
      <Link
        to="/dashboard"
        className="flex items-center w-full text-base text-body-dark text-start focus:text-accent"
      >
        <BsColumnsGap />
        <span className="ml-4">Dashboard</span>
      </Link>
    </div>
  </aside>
);

export default SideBar;
