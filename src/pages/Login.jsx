import Authentication from '../components/Authentication'
import logo from '../assets/img/icon.png';
import '../css/style.css'

function Login() {
  return (
    <section className="ctn-login">
        <article className='welcome'>
            <div className="logo">
                <img src={logo} />
                <h3>PassaBola</h3>
            </div>
            <h1><span>Seja</span>Bem-Vinda!</h1>
            <h2>Sua paixão pelo futebol feminino merece <span>destaque.</span></h2>
        </article>
        <Authentication />
    </section>
  )
}

export default Login
