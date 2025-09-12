import '../css/search.css'

function Search() {
  return (
    <section className="ctn-search">
        <article className='search'>
            <input type="search" placeholder="Buscar notícias.."/>
            <button><i className="fa-solid fa-search"></i></button>
        </article>
    </section>
  )
}

export default Search
