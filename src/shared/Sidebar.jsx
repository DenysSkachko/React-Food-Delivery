import { Link, useLocation } from 'react-router-dom';
import { menuLinks } from '../data/menuLinks';
import { LuLogOut } from "react-icons/lu";
export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="fixed left-0 h-full w-26 bg-dark flex flex-col items-center justify-between pl-3 py-6 ">
      <div className="flex flex-col items-center w-full">
        <img src="/logo.svg" alt=""  className="mb-4"/>

      <ul className="flex flex-col gap-3 w-full">
        {menuLinks.map((link, i) => {
        const Icon = link.icon;
        const isActive = link.path === currentPath;

        return (
          <Link
            to={link.path}
            key={i}
            className={`flex items-center justify-center w-full rounded-l-xl mt-2.5 mb-3 p-3 ${
              isActive ? 'bg-dark-bg' : ''
            }`}
          >
            <span
              className={`p-4 rounded-lg ${
                isActive ? 'bg-accent' : 'text-accent'
              }`}
            >
              <Icon className="size-6" />
            </span>
          </Link>
        );
      })}
      </ul>
      </div>

      <LuLogOut className="size-6 text-accent"/>
    </aside>
  );
};
