import Header from "../components/Header"
import NavBar from "../components/NavBAr"
import NotificationsCard from "../components/NotificationsCard"

function Notifications()  {
  return (
    <section className='ctn-notifications'>
      <Header />
      <div className="content">
        <NotificationsCard />
      </div>
      <NavBar />
    </section>
  )
}

export default Notifications
