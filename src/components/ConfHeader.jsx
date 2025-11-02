import {Link} from 'react-router-dom'
import '../css/header.css'

function ConfHeader() {
  return (
    <section className='ctn-conf-header'>
        <article className='conf-header'>
            <Link to='/Profile'><i className='fa-regular fa-user'></i>Configurações</Link>
            <Link to='/'><i className='fa-regular fa-trash-can'></i>Log-Out</Link>
        </article>
    </section>
  )
}

export default ConfHeader;
