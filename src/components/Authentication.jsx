import '../css/authentication.css'
import { Link} from "react-router-dom";


function Authentication() {
  return (
    <section className='authentication'>
        <article className='ctn-input'>
            <label htmlFor="email">Email:</label>
            <div className="input">
                <input id='email' type="email" placeholder='exemplo@gmail.com'/>
                <i className='fa-regular fa-envelope'></i>
            </div>
        </article>
        <article className='ctn-input'>
            <label htmlFor="password">Senha:</label>
            <div className="input">
                <input type="password" placeholder='Entre com sua senha' />
                <i className='fa-regular fa-eye'></i>
            </div>
        </article>
        <section className='conf-account'>
            <article className='remember-me'>
                <input type="checkbox" />
                <a>Lembrar de mim</a>
            </article>
            <a>Esqueceu a senha?</a>
        </section>
        <button><Link to='/Home'>Entrar</Link></button>
        <p>Não tem uma conta? <a>Criar</a></p>
    </section>
  )
}

export default Authentication
