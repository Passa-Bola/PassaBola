import '../css/style.css'
import Ad from "../components/Ad"
import Header from "../components/Header"
import MyTeam from "../components/MyTeam"
import NavBar from "../components/NavBAr"
import Statistics from '../components/Statistics'
import Players from '../components/Players'

function Team() {
  return (
    <section className='ctn-team'>
      <Header />
      <div className="content">
        <Ad />
        <MyTeam />
        <Statistics />
        <Players />
      </div>
      <NavBar />
    </section>
  )
}

export default Team
