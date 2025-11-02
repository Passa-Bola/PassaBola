import Header from '../components/Header'
import NavBar from '../components/NavBAr'
import Ad from '../components/Ad'
import Maps from '../components/Maps'
import Play from '../components/Play'
import '../css/style.css'

function ToPlay() {
  return (
    <section className='ctn-toplay'>
      <Header />
      <div className="content">
        <Maps />
        <Play />
      </div>
      <NavBar />
    </section>
  )
}

export default ToPlay