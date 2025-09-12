import { Link } from "react-router-dom";
import { HandleActive } from "../hooks/HandleActive";
import '../css/header.css'

function Header() {
  return (
    <header>
      <Link to="/Profile">
        <article className='profile'>
            <img src="https://marketplace.canva.com/Dz63E/MAF4KJDz63E/1/tl/canva-user-icon-MAF4KJDz63E.png"/>
            <div className="info-profile">
              <h1>@User</h1>
              <p>Corinthians</p>
            </div>
        </article>
      </Link>
      <Link to="/Notifications"><i className='fa-solid fa-bell'></i></Link>
    </header>
  )
}

export default Header
