import '../css/play.css'

function Play() {
  return (
    <section className='play'>
        <h1>Jogar</h1>
        <div className="feed-play">
            <article className='card-play'>
                <div className="info-card">
                    <h1>Treino livre: 17/09/2025</h1>
                    <h2>07:00 - 21:00</h2>
                    <h3>Av. Lins de vasconcelos, 1222 - Aclimação, São Paulo</h3>
                </div>
                <div className="button-play">
                    <button>Participando!</button>
                </div>
            </article>

            <article className='card-play'>
                <div className="info-card">
                    <h1>Treino livre: 18/09/2025</h1>
                    <h2>07:00 - 21:00</h2>
                    <h3>Av. Lins de vasconcelos, 1222 - Aclimação, São Paulo</h3>
                </div>
                <div className="button-play">
                    <button>Inscrever-se</button>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Play
