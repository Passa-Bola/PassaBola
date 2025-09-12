import Header from '../components/Header'
import Search from '../components/Search'
import '../css/style.css'


function Home() {
  return (
    <section className='home'>
      <Header />
      <Search />
      <h1>Home</h1>
    </section>
  )
}

export default Home
