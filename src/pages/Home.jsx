import Ad from '../components/Ad'
import Header from '../components/Header'
import NavBar from '../components/NavBAr'
import NewsFeed from '../components/NewsFeed'
import Players from '../components/Players'
import Search from '../components/Search'
import '../css/style.css'


function Home() {
  return (
    <section className='home'>
      <Header />
      <div className="content">
        <Search />
        <NewsFeed />
        <NavBar />
      </div>
    </section>
  )
}

export default Home
