import '../css/navbar.css'
import icon from '../assets/img/icon.png'

function NavBar() {
  return (
    <section className='navbar'>
        <nav>
            <ul>
                <li><a href="#"><i className="fa-regular fa-house active"></i></a></li>
                <li><a href="#"><i className="fa-regular fa-futbol"></i></a></li>
                <span><li><a href="#"><img src={icon}/></a></li></span>
                <li><a href="#"><i className="fa-regular fa-map"></i></a></li>
                <li><a href="#"><i className="fa-regular fa-circle-user"></i></a></li>
            </ul>
        </nav>
    </section>
  )
}

export default NavBar