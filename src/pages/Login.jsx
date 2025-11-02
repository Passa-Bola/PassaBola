import Authentication from '../components/Authentication'
import logo from '../assets/img/icon.png';
import '../css/style.css'

function Login() {
  return (
    <section className="ctn-login">
      <article className='login'>
        <section className='welcome'>
          <div className="logo">
            <img src={logo} />
            <h3>PassaBola</h3>
          </div>
          <div className='content-welcome'>
            <h1><span>Seja</span>Bem-Vinda!</h1>
            <h2>Sua paixão pelo futebol feminino merece <span>destaque.</span></h2>
          </div>
          <button>Criar conta</button>
          <div className='links-social-welcome'>
            <a href="https://www.youtube.com/@passabola" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-youtube'></i></a>
            <a href="https://www.instagram.com/passaabola/" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-instagram'></i></a>
            <a href="https://www.facebook.com/oficialpassaabola/" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-facebook'></i></a>
          </div>
        </section>
        <Authentication />
      </article>
    </section>
  )
}

export default Login
