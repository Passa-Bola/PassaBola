import '../css/myteam.css'

function MyTeam() {
  return (
    <section className='ctn-my-team'>
        <article className='my-team'>
            <img src="https://logodownload.org/wp-content/uploads/2016/11/corinthians-logo-01.png"/>
            <div className="info-my-team">
                <h1>Futebol Feminino do Sport Club Corinthians Paulista</h1>
                <h2>2º lugar Campeonato Brasileiro Feminino A1</h2>
            </div>
        </article>
        <section className='ctn-next-match'>
            <h1>Próximo jogo</h1>
            <article className='next-match'>
                <p>Paulista Feminino | Sáb., 20/09, 11:00</p>
                <div className="ctn-match">
                    <article className='team'>
                        <img src="https://logodownload.org/wp-content/uploads/2016/11/corinthians-logo-01.png"/>
                        <h1>Corinthians</h1>
                    </article>
                    
                    <div className="info-match">
                        <i className='fa-solid fa-xmark'></i>
                        <p>Primeira fase | Rodada 9 de 14</p>
                    </div>

                    <article className='team'>
                        <img src="https://ssl.gstatic.com/onebox/media/sports/logos/VHdNOT6wWOw_vJ38GMjMzg_96x96.png"/>
                        <h1>Santos</h1>
                    </article>
                </div>
            </article>
            <div className="go-to-match">
                <a href="https://www.google.com/search?q=onde+jogo+assistir+futebol+feminino&sca_esv=6b419d715691fe69&sxsrf=AE3TifNoerlHGyLRj7lbSep5TA_zP1cKpg%3A1757947058799&ei=siTIaJugJ8rp1sQPhrzM-AU&ved=0ahUKEwibwduP_9qPAxXKtJUCHQYeE18Q4dUDCBA&uact=5&oq=onde+jogo+assistir+futebol+feminino&gs_lp=Egxnd3Mtd2l6LXNlcnAiI29uZGUgam9nbyBhc3Npc3RpciBmdXRlYm9sIGZlbWluaW5vMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IyTBQ2gNYuw5wAXgBkAEAmAHzAaABlwiqAQUwLjQuMrgBA8gBAPgBAZgCBqACvQbCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICChAjGIAEGCcYigXCAgsQABiABBixAxiDAcICBRAAGIAEwgIIEAAYBxgIGB7CAgYQABgIGB6YAwCIBgGQBgmSBwUxLjQuMaAHo0GyBwUwLjQuMbgHtwbCBwUwLjMuM8gHFQ&sclient=gws-wiz-serp" target='_blank'><i className="fa-regular fa-images"></i>Onde assitir</a>
                <a href="https://www.google.com/search?q=comprar+ingressos+futebol+feminino&sca_esv=6b419d715691fe69&sxsrf=AE3TifNrAEWFdM0edQ8VpE6FDeS5xIPSNg%3A1757947072638&ei=wCTIaO7QJr3N1sQP0_SSsA0&ved=0ahUKEwjusLGW_9qPAxW9ppUCHVO6BNYQ4dUDCBA&uact=5&oq=comprar+ingressos+futebol+feminino&gs_lp=Egxnd3Mtd2l6LXNlcnAiImNvbXByYXIgaW5ncmVzc29zIGZ1dGVib2wgZmVtaW5pbm8yCBAhGKABGMMEMggQIRigARjDBDIIECEYoAEYwwRI0SFQAFjaGnAAeAGQAQCYAb0BoAGTEKoBBDEuMTa4AQPIAQD4AQGYAgygAqQLwgIGEAAYBxgewgIIEAAYBxgIGB7CAgYQABgIGB7CAgUQABjvBcICCBAAGIAEGKIEmAMAkgcEMS4xMaAH8WiyBwQxLjExuAekC8IHBTAuOC40yAce&sclient=gws-wiz-serp" target='_blank'><i className="fa-regular fa-address-card"></i>Comprar ingressos</a>
            </div>
        </section>
    </section>
  )
}

export default MyTeam
