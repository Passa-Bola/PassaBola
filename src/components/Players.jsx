import '../css/players.css'
import { useState } from 'react'
import DashboardModal from './Dashboard'

const PLAYERS = [
    { name: 'Nicole Ramos', team: 'corinthians', position: 'Goleira', img: 'https://cdn.meutimao.com.br/_upload/jogador/nicole-ramos-no-corinthians_3t.jpg' },
    { name: 'Thaís Ferreira', team: 'corinthians', position: 'Zagueira', img: 'https://cdn.meutimao.com.br/_upload/jogador/thais-cristina-da-silva-ferreira-no-corinthians_nt.jpg' },
    { name: 'Erika', team: 'corinthians', position: 'Zagueira', img: 'https://cdn.meutimao.com.br/_upload/jogador/erika-cristiano-dos-santos-no-corinthians_jt.jpg' },
    { name: 'Mariza', team: 'corinthians', position: 'Zagueira', img: 'https://cdn.meutimao.com.br/_upload/jogador/mariza-nascimento-silva-no-corinthians_pt.jpg' },
    { name: 'Tamires', team: 'corinthians', position: 'Lateral esq.', img: 'https://cdn.meutimao.com.br/_upload/jogador/tamires-cassia-dias-de-britto-no-corinthians_qt.jpg' },
    { name: 'Dayana Rodríguez', team: 'corinthians', position: 'Lateral dir.', img: 'https://cdn.meutimao.com.br/_upload/jogador/dayana-lisset-rodriguez-leon-no-corinthians_at.jpg' },
    { name: 'Duda Sampaio', team: 'corinthians', position: 'Meia', img: 'https://cdn.meutimao.com.br/_upload/jogador/maria-eduarda-ferreira-sampaio-no-corinthians_8t.jpg' },
    { name: 'Andressa Alves', team: 'corinthians', position: 'Meia', img: 'https://cdn.meutimao.com.br/_upload/jogador/andressa-alves-da-silva-no-corinthians_vt.jpg' },
    { name: 'Gabi Zanotti', team: 'corinthians', position: 'Meia', img: 'https://cdn.meutimao.com.br/_upload/jogador/gabriela-maria-zanotti-demoner-no-corinthians_wt.jpg' },
    { name: 'Jaqueline', team: 'corinthians', position: 'Atacante', img: 'https://cdn.meutimao.com.br/_upload/jogador/jaqueline-ribeiro-dos-santos-almeida-no_6t.jpg' },
    { name: 'Jhonson', team: 'corinthians', position: 'Atacante', img: 'https://cdn.meutimao.com.br/_upload/jogador/ingrid-aparecida-borges-de-morais-no-corinthians_1t.jpg' }
]

function Players() {
    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState(false)

    const handleChartClick = (player) => {
        // store selection and open the modal dashboard (blank container)
        setSelected(player.name)
        setOpen(true)
    }

    return (
        <section className='ctn-players'>
                <h1>Jogadoras</h1>
                <div className="feed-players">
                    {PLAYERS.map((p, idx) => (
                        <article className='player' key={p.name}>
                                <div className="info-player">
                                        <img src={p.img} alt={p.name} />
                                        <div className="info-team-player">
                                                <h1>{p.name}</h1>
                                                <p>{p.team}</p>
                                                <p>{p.position}</p>
                                        </div>
                                </div>
                                <div className="player-actions">
                                    <button className="btn-chart" title="Ver toques" onClick={() => handleChartClick(p)}>
                                        <i className='fa-solid fa-chart-simple'></i>
                                    </button>
                                    <i className='fa-solid fa-user-plus'></i>
                                </div>
                        </article>
                    ))}
        </div>
        {open && (
            <DashboardModal onClose={() => setOpen(false)} />
        )}
    </section>
    )
}

export default Players
