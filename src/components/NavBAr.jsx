import { Link } from "react-router-dom";
import '../css/navbar.css'
import icon from '../assets/img/icon.png'


function NavBar() {
  return (
    <section className='navbar'>
        <nav>
          <ul>
            <li><Link to="/Home"><i className="fa-regular fa-house active"></i></Link></li>
            <li><Link to="/Team"><i className="fa-regular fa-futbol"></i></Link></li>
            <span><li><Link to="/PassaBola"><img src={icon}/></Link></li></span>
            <li><Link to="/ToPlay"><i className="fa-regular fa-map"></i></Link></li>
            <li><Link to="/Profile"><i className="fa-regular fa-circle-user"></i></Link></li>
          </ul>
        </nav>
    </section>
  )
}

export default NavBar