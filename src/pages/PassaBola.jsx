import NavBar from '../components/NavBAr'
import Header from '../components/Header'
import Ad from '../components/Ad'
import '../css/style.css'

function PassaBola() {
  return (
    <section className='ctn-channel'>
      <Header />
      <div className="content">
        <Ad />
        <section className='about'>
          <h1>Sobre</h1>
          <h2>O Passa a Bola é uma comunidade dedicada a fortalecer o futebol feminino dentro e fora de campo.
            No YouTube, produzimos entrevistas, análises e conteúdos que dão voz a jogadoras e valorizam o esporte.
            No Instagram, trazemos notícias rápidas, campanhas e interação com a comunidade.
            Além das redes, organizamos jogos e eventos de futebol feminino, criando oportunidades de prática, conexão e visibilidade para mulheres no esporte.
            <br />
            <br />
            Mais do que um canal, somos um movimento que acredita no poder do futebol feminino como espaço de representatividade, união e transformação.
          </h2>
        </section>
        <section className='channels'>
          <h1>Nossos Canais</h1>
          <article className='ctn-info-channel'>
            <h1><i className="fa-brands fa-youtube"></i> You<span>Tube</span></h1>
            <div className="channel">
              <img src="https://yt3.ggpht.com/3AsDJjJSPZkpyK-m2XYcI9m4gjgi1WPTkjzaY0V9i5Z0IJj0o-lIUWdQGKql_sInZlUn00uzVGM=s176-c-k-c0x00ffffff-no-rj-mo" alt="img-youtube-channel" />
              <div className="info-channel">
                <h1>@passabola</h1>
                <h2>Agora o Passa Bola tem um podcast, ou melhor, um PABCAST, o Fala, Bebê. Aqui, nosso bate papo vai ser sobre o universo do futebol mas para além das quatro linhas. Vamos falar sobre diversidade, cultura, moda, entretenimento e várias outras coisas legais. Vem ouvir/assistir e entrar nas discussões com a gente.</h2>
                <a href="https://www.youtube.com/@passabola" target='_blank'>Ir para o canal</a>
              </div>
            </div>
          </article>
          <article className='ctn-info-channel'>
            <h1><i className="fa-brands fa-instagram"></i> Instagram</h1>
            <div className="channel">
              <img src="https://yt3.ggpht.com/3AsDJjJSPZkpyK-m2XYcI9m4gjgi1WPTkjzaY0V9i5Z0IJj0o-lIUWdQGKql_sInZlUn00uzVGM=s176-c-k-c0x00ffffff-no-rj-mo" alt="img-instagram-channel" />
              <div className="info-channel">
                <h1>@passaabola</h1>
                <h2>Fala Bebê! Somos o PassaBola, seu cantinho do futebol feminino! ⚽💜
                  Aqui você encontra notícias, bastidores, entrevistas e jogos, além de conteúdo sobre diversidade, cultura e histórias inspiradoras.
                  Vem com a gente, comente, compartilhe e participe! ✨
                </h2>
                <a href="https://www.instagram.com/passaabola/" target='_blank'>Ir para o perfil</a>
              </div>
            </div>
          </article>
        </section>

      </div>
      <NavBar />
    </section>
  )
}

export default PassaBola
