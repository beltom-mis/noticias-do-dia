const newsContainer = document.getElementById("news-container");

async function fetchNews() {
  try {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=pt&apiKey=YOUR_API_KEY");
    const data = await response.json();

    if (data.articles) {
      newsContainer.innerHTML = data.articles.map(article => `
        <article>
          <h2>${article.title}</h2>
          <p>${article.description || ""}</p>
          <a href="${article.url}" target="_blank">Leia mais</a>
        </article>
        <hr>
      `).join("");
    } else {
      newsContainer.innerHTML = "<p>Não foi possível carregar as notícias no momento.</p>";
    }
  } catch (error) {
    newsContainer.innerHTML = "<p>Erro ao carregar as notícias. Tente novamente mais tarde.</p>";
  }
}

fetchNews();
