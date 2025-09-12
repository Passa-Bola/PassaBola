import '../css/players.css'

function Players() {
  return (
    <section className='ctn-players'>
        <h1>Jogadoras</h1>
        <div className="feed-players">
            <article className='player'>
                <div className="info-player">
                    <img src="https://imageio.forbes.com/specials-images/imageserve/660cd19c474b4ec0e819b5ec/0x0.jpg?format=jpg&crop=713,713,x335,y97,safe&height=416&width=416&fit=bounds"/>
                    <div className="info-team-player">
                        <h1>Aitana Bonmatí</h1>
                        <p>Barcelona</p>
                    </div>
                </div>
                <i className='fa-solid fa-user-plus'></i>
            </article>
        </div>
    </section>
  )
}

export default Players
