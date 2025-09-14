import { Link } from "react-router-dom";
import { HandleActive } from "../hooks/HandleActive";
import '../css/header.css'

function Header() {
  return (
    <header>
      <section className="header">
      <Link to="/Profile">
        <article className='profile'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBTidDksW45LZo_UjdEqRUC3EYKUggNENiQ&s"/>
            <div className="info-profile">
              <h1>@alexavier</h1>
              <p>Corinthians</p>
            </div>
        </article>
      </Link>
      <Link to="/Notifications"><i className='fa-solid fa-bell'></i></Link>
      </section>
    </header>
  )
}

export default Header
