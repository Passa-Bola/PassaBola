import '../css/statistics.css'

function Statistics() {
    return (
        <section className='ctn-statistics'>
            <h1>Estatísticas</h1>
            <article className='statistics'>
                <h1>Classificação</h1>
                <h2>Paulista Feminino</h2>
                <div className="table-myteam">
                    <table>
                        <thead>
                            <tr>
                                <th>Pg</th>
                                <th>J</th>
                                <th>V</th>
                                <th>E</th>
                                <th>D</th>
                                <th>Gp</th>
                                <th>Gc</th>
                                <th>Sg</th>
                                <th>%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>21</td>
                                <td>8</td>
                                <td>7</td>
                                <td>0</td>
                                <td>1</td>
                                <td>22</td>
                                <td>5</td>
                                <td>17</td>
                                <td>88</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    )
}

export default Statistics
