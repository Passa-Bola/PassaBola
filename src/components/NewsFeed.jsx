import '../css/newsfeed.css'

function NewsFeed() {
  return (
    <section className='feed'>
        <h1>Destaque da semana</h1>
        <div className="featured-news">
            <article className='ctn-featured-news'>
                <img src="https://azmina.com.br/wp-content/uploads/2017/01/marta_selecao.jpg"/>
                <div className="info-featured-news">
                    <h1>Marta convocada para a Copa América!</h1>
                    <h2>Marta foi convocada pelo técnico da Seleção Brasileira feminina, Arthur Elias, para disputar a Copa América deste ano, no Equador</h2>
                    <div className="date-card">
                        <p>12/09/2025</p>
                    </div>
                </div>
            </article>
        </div>
        <h1>Notícias</h1>
        <div className="ctn-news">
            <article className='news'>
                <img src="https://azmina.com.br/wp-content/uploads/2017/01/marta_selecao.jpg"/>
                <div className="info-news">
                    <h1>Marta convocada para a Copa América!</h1>
                    <div className="date-card">
                        <p>12/09/2025</p>
                    </div>
                </div>
            </article>

            <article className='news'>
                <img src="https://azmina.com.br/wp-content/uploads/2017/01/marta_selecao.jpg"/>
                <div className="info-news">
                    <h1>Marta convocada para a Copa América!</h1>
                    <div className="date-card">
                        <p>12/09/2025</p>
                    </div>
                </div>
            </article>

            <article className='news'>
                <img src="https://azmina.com.br/wp-content/uploads/2017/01/marta_selecao.jpg"/>
                <div className="info-news">
                    <h1>Marta convocada para a Copa América!</h1>
                    <div className="date-card">
                        <p>12/09/2025</p>
                    </div>
                </div>
            </article>

            <article className='news'>
                <img src="https://azmina.com.br/wp-content/uploads/2017/01/marta_selecao.jpg"/>
                <div className="info-news">
                    <h1>Marta convocada para a Copa América!</h1>
                    <div className="date-card">
                        <p>12/09/2025</p>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default NewsFeed
