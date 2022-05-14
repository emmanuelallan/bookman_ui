import { NavLink } from 'react-router-dom';
import {
  BsColumnsGap,
  BsJournals,
  BsFillMenuButtonFill,
  BsBasket2,
  BsGear,
} from 'react-icons/bs';

const SideBar = () => {
  const menus = [
    {
      title: 'dashboard',
      href: '/dashboard',
    },
    {
      title: 'books',
      href: '/books',
    },
    {
      title: 'categories',
      href: '/categories',
    },
    {
      title: 'orders',
      href: '/orders',
    },
    {
      title: 'settings',
      href: '/settings',
    },
  ];
  return (
    <aside className="shadow w-56 xl:w-56 hidden lg:block overflow-y-auto bg-white fixed start-0 bottom-0 h-full pt-20">
      <div className="flex flex-col py-3">
        {menus.map((menu) => (
          <NavLink
            to={menu.href}
            key={menu.title}
            className={({ isActive }) =>
              isActive
                ? 'flex items-center w-full text-base text-body-dark text-start px-4 py-3 text-accent capitalize hover:bg-green-50'
                : 'flex items-center w-full text-base text-body-dark text-start px-4 py-3 capitalize hover:bg-green-50'
            }
          >
            {menu.title === 'dashboard' ? (
              <BsColumnsGap />
            ) : menu.title === 'books' ? (
              <BsJournals />
            ) : menu.title === 'books' ? (
              <BsFillMenuButtonFill />
            ) : menu.title === 'categories' ? (
              <BsFillMenuButtonFill />
            ) : menu.title === 'orders' ? (
              <BsBasket2 />
            ) : (
              <BsGear />
            )}
            <span className="ml-4">{menu.title}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
