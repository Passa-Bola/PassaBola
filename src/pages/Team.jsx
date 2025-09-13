import Ad from "../components/Ad"
import Header from "../components/Header"
import NavBar from "../components/NavBAr"

function Team() {
  return (
    <section className='ctn-team'>
      <Header />
      <div className="content">
        <Ad />
      </div>
      <NavBar />
    </section>
  )
}

export default Team
