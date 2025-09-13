import Authentication from '../components/Authentication'
import '../css/style.css'

function Login() {
  return (
    <section className="ctn-login">
        <article className='welcome'>
            <h1><span>Seja</span>Bem Vinda!</h1>
            <h2>Sua paixão pelo futebol feminino merece <span>destaque.</span></h2>
        </article>
        <Authentication />
    </section>
  )
}

export default Login
