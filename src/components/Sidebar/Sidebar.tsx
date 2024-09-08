import { NavLink } from "react-router-dom";
import { iMenu, Menus } from "../../routers/Menus";

function Sidebar() {
  return (
    <div className={'bg-gradient-to-r from-pink-500 to-blue-500 py-5 px-5 md:w-80 md:h-screen'}>
      <div className={'text-xl text-white py-4'}>Taskly</div>
      <ul>
        {
          Menus.map((menu: iMenu) => (
            <li key={menu.title} className={'text-fuchsia-950 cursor-pointer hover:text-white'}>
              <NavLink
                to={menu.route}
                className={({ isActive }) =>
                  isActive ? 'flex gap-3 py-3 font-bold text-white' : 'flex gap-3 py-3 font-bold'
                }
                ><img src={menu.icon} alt={menu.title} className={'w-7 h-auto'} /> {menu.title}</NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar;
