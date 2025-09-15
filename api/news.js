export default async function handler(req, res) {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) return res.status(500).json({ message: "Chave da API não configurada" });

    const url = `https://newsapi.org/v2/everything?q="futebol feminino"&language=pt&sortBy=publishedAt&apiKey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const text = await response.text();
      console.error("Erro da API externa:", response.status, text);
      return res.status(500).json({ message: "Erro ao buscar notícias externas" });
    }

    const data = await response.json();

    const articles = data.articles.map(a => ({
      source: a.source.name,
      title: a.title,
      description: a.description,
      url: a.url,
      imageUrl: a.urlToImage,
      publishedAt: a.publishedAt
    }));

    res.status(200).json(articles);
  } catch (err) {
    console.error("Erro interno:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
