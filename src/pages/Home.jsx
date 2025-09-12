import Ad from '../components/Ad'
import Header from '../components/Header'
import Search from '../components/Search'
import '../css/style.css'


function Home() {
  return (
    <section className='home'>
      <Header />
      <Search />
      <Ad />
      <h1>Home</h1>
    </section>
  )
}

export default Home
