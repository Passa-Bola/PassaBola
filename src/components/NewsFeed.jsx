import '../css/newsfeed.css';
import { useEffect, useState } from 'react';

function NewsFeed() {
    const [featured, setFeatured] = useState(null);
    const [news, setNews] = useState([]);
    const [news2, setNews2] = useState([])

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('/api/news');
                const data = await response.json();

                if (data.length > 0) {
                    setFeatured(data[1]);
                    setNews(data.slice(2, 20));
                    setNews2(data.slice(21, 41))
                }
            } catch (err) {
                console.error('Erro ao buscar notícias:', err);
            }
        }
        fetchNews();
    }, []);


    return (
        <section className='feed'>
            {featured && (
                <>
                    <h1>Destaque da semana</h1>
                    <div className="featured-news">
                        <article className='ctn-featured-news'>
                            <img src={featured.imageUrl} alt={featured.title} />
                            <div className="info-featured-news">
                                <h1>{featured.title}</h1>
                                <h2>{featured.description}</h2>
                                <div className="date-card">
                                    <p>{new Date(featured.publishedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </>
            )}

            {news.length > 0 && (
                <>
                    <h1>Notícias</h1>
                    <div className="ctn-news">
                        {news.map((article, index) => (
                            <article className='news' key={index}>
                                <img src={article.imageUrl} alt={article.title} />
                                <div className="info-news">
                                    <h1>{article.title}</h1>
                                    <div className="date-card">
                                        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </>
            )}

            {news2.length > 0 && (
                <div className="ctn-news-col">
                    {news2.map((article, index) => (
                        <article className='news-col' key={index}>
                            <img src={article.imageUrl} alt={article.title} />
                            <div className="info-news-col">
                                <h1>{article.title}</h1>
                                <div className="date-card">
                                    <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default NewsFeed;
