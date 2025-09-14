import NavBar from '../components/NavBAr'

function Profile() {
  return (
    <section className='ctn-profile'>
      <NavBar />
      <div className="content-profile">
        <section className='sec-profile'>
          <div className="banner">
            <img src="https://pbs.twimg.com/media/Ea9u99pXkAAed5r.jpg" alt="banner-profile" />
          </div>
          <div className="ctn-user">
            <div className="user">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBTidDksW45LZo_UjdEqRUC3EYKUggNENiQ&s" />
              <h1>Ale Xavier</h1>
              <h2>@alexavier</h2>
            </div>
            <div className="social">
              <a href="#"><i className='fa-brands fa-instagram'></i></a>
              <a href="#"><i className='fa-brands fa-linkedin'></i></a>
              <a href="#"><i className='fa-brands fa-youtube'></i></a>
            </div>
          </div>
          <div className="bio">
            <p>futebol ⚽️ e família 🏳️‍🌈<br />
              🎥 segue o @passaabola <br />
              📍 contato: alessandra@passabola.com.br <br />
              📺 tô no @paramountplus</p>
          </div>
          <div className="followers-following">
            <h1>521k Seguidores</h1>
            <h1>2340 Seguindo</h1>
          </div>
        </section>
      </div>
      <section className='feed-profile'>

      </section>
    </section>
  )
}

export default Profile
