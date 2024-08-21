import { Link } from "react-router-dom";
import { iMenu, Menus } from "../../routers/Menus";

function Sidebar() {
  return (
    <div className={'bg-gradient-to-r from-pink-500 to-blue-500 py-5 px-5 w-80 h-screen'}>
      <div className={'text-xl text-white py-4'}>Taskly</div>
      <ul>
        {
          Menus.map((menu: iMenu) => (
            <li key={menu.title} className={'text-fuchsia-950 cursor-pointer hover:text-fuchsia-800'}>
              <Link to={menu.route} className={'flex gap-3 py-3'}><img src={menu.icon} alt={menu.title} className={'w-7 h-auto'} /> {menu.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar;
