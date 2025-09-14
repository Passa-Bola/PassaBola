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
                <a href="#"><i className="fa-regular fa-images"></i>Onde assitir</a>
                <a href="#"><i className="fa-regular fa-address-card"></i>Comprar ingressos</a>
            </div>
        </section>
    </section>
  )
}

export default MyTeam
