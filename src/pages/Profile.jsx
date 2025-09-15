import '../css/style.css'
import Header from '../components/Header'
import NavBar from '../components/NavBAr'

function Profile() {
  return (
    <section className='ctn-profile'>
      <NavBar />
      <div className="ctn-header">
        <Header />
      </div>
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
              <a href="https://www.instagram.com/alexavier/" target='_blank'><i className='fa-brands fa-instagram'></i></a>
              <a href="https://x.com/alegxavier" target='_blank'><i className='fa-brands fa-twitter'></i></a>
              <a href="https://www.youtube.com/@passabola" target='_blank'><i className='fa-brands fa-youtube'></i></a>
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
        <section className='feed-profile'>
          <article className='post-feed'>
            <img src="https://s2-ge.glbimg.com/lR0Hy9NZcJFu7umg4FZX4U5kARM=/0x0:1166x586/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/U/N/587lAAShKiKSN48kSrWg/daniela-brumado-ret.jpg" />
            <h1>Participação na peneira sub 20 do São Paulo</h1>
            <p>10/09/2025</p>
          </article>

          <article className='post-feed'>
            <img src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/Palmeiras-Corinthians-Feminino-e1725729863290.jpg?w=1200&h=900&crop=1" />
            <h1>Jogando contra corinthians feminino - resultado: 5-1</h1>
            <p>03/09/2025</p>
          </article>
        </section>
      </div>
    </section>
  )
}

export default Profile
