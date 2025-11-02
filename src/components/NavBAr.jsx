import { Link, useLocation } from "react-router-dom";
import '../css/navbar.css';
import icon from '../assets/img/icon.png';

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { path: "/Home", icon: "fa-regular fa-house", title: 'Home' },
    { path: "/Team", icon: "fa-regular fa-futbol", title: 'MyTeam'  },
    { path: "/ToPlay", icon: "fa-regular fa-map", title: 'Play'  },
    { path: "", icon: "fa-regular fa-comments", title: 'Chat'  },
    { path: "/Notifications", icon: "fa-regular fa-bell", title: 'Notificações'  },
    { path: "/Profile", icon: "fa-regular fa-circle-user", title: 'Profile'  },
  ];

  return (
    <section className='navbar'>
      <nav>
        <ul>
          {menuItems.slice(0, 3).map(item => (
            <li key={item.path}>
              <Link to={item.path}>
                <i className={`${item.icon} ${currentPath === item.path ? "active" : ""}`}></i>
                <h1>{item.title}</h1>
              </Link>
            </li>
          ))}

          <span>
            <li>
              <Link to="/PassaBola">
                <img src={icon} alt="logo" />
                <h1>PassaBola</h1>
              </Link>
            </li>
          </span>

          {menuItems.slice(3).map(item => (
            <li key={item.path}>
              <Link to={item.path}>
                <i className={`${item.icon} ${currentPath === item.path ? "active" : ""}`}></i>
                <h1>{item.title}</h1>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;
