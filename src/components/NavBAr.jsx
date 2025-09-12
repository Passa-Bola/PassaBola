import { Link, useLocation } from "react-router-dom";
import '../css/navbar.css';
import icon from '../assets/img/icon.png';

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { path: "/Home", icon: "fa-regular fa-house" },
    { path: "/Team", icon: "fa-regular fa-futbol" },
    { path: "/ToPlay", icon: "fa-regular fa-map" },
    { path: "/Profile", icon: "fa-regular fa-circle-user" },
  ];

  return (
    <section className='navbar'>
      <nav>
        <ul>
          {menuItems.slice(0, 2).map(item => (
            <li key={item.path}>
              <Link to={item.path}>
                <i className={`${item.icon} ${currentPath === item.path ? "active" : ""}`}></i>
              </Link>
            </li>
          ))}

          <span>
            <li>
              <Link to="/PassaBola">
                <img src={icon} alt="logo" />
              </Link>
            </li>
          </span>

          {menuItems.slice(2).map(item => (
            <li key={item.path}>
              <Link to={item.path}>
                <i className={`${item.icon} ${currentPath === item.path ? "active" : ""}`}></i>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;
