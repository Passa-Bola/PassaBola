import { Link } from "react-router-dom";
import { HandleActive } from "../hooks/HandleActive";
import '../css/header.css'

function Header() {
  return (
    <header>
      <section className="header">
        <Link to="/Profile">
          <article className='profile'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBTidDksW45LZo_UjdEqRUC3EYKUggNENiQ&s" />
          </article>
        </Link>
        <article className="logo-header">
          <h1>PassaBola</h1>
        </article>
      </section>
    </header>
  )
}

export default Header
