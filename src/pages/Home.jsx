import Ad from '../components/Ad'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
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
        <Ad />
        <NewsFeed />
        <Players />
      </div>
      <NavBar />
    </section>
  )
}

export default Home
