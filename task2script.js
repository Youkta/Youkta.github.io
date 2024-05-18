document.addEventListener('DOMContentLoaded', function () {
  fetchArticles();
});

function fetchArticles() {
  fetch('https://coding-week-2024-api.onrender.com/api/data')
      .then(response => response.json())
      .then(data => {
          const Article1 = data[0];
          const Article2 = data[1];
          const Article3 = data[2];
          const Article4 = data[3];
          const sidebarArticles = data.slice(4); // Remaining articles

          displayArticle1(Article1, 'tile1');
          displayArticle2(Article2, 'tile2');
          displayArticle3(Article3, 'tile3');
          displayArticle4(Article4, 'tile4');
          displaySideArticles(sidebarArticles, 'sidebar-articles');
      })
      .catch(error => {
          console.error('Error fetching articles:', error);
      });
}
//1
function displayArticle1(article, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML=`
  <a href="#${article.id}"><img src="${article.image}" alt="${article.headline}" height="430px" width="430px">
        <div class="overlay" width="400px">
            <p style="background-color: #000000;color: #ffffff;border-radius: 15px;padding: 5px;font-size: 12px;letter-spacing: 0;">Featured</p>
            <p style="background-color: #000000;color: #ffffff;border-radius: 15px;padding: 5px;font-size: 12px;letter-spacing: 0;">${article.type}</p><br><br>
            <h2>${article.headline}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>            
            <p>${article.author}</p>&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg><p>${article.date}</p>
        </div></a>
        <span class="popuptext" id="${article.id}"><a href="#">&times;</a><br><h3>${article.headline}</h3><br>${article.content}</span>

`;
}
//2
function displayArticle2(article, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
  <a href="#${article.id}"><img src="${article.image}" alt="${article.headline}" height="430px" width="280px">
  <div class="overlay" width="200px">
      <p style="background-color: #000000;color: #ffffff;border-radius: 15px;padding: 5px;font-size: 12px;letter-spacing: 0;">Featured</p>
      <p style="background-color: #000000;color: #ffffff;border-radius: 15px;padding: 5px;font-size: 12px;letter-spacing: 0;">${article.type}</p><br><br>
      <h3>${article.headline}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg><p>${article.author}</p><br><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg><p>${article.date}</p>
  </div></a>
  <span class="popuptext" id="${article.id}"><a href="#">&times;</a><br><h3>${article.headline}</h3><br>${article.content}</span>

  `;
}
//3
function displayArticle3(article, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
  <a href="#${article.id}"><img src="${article.image}" alt="${article.headline}" height="210px" width="210px">
  <div class="overlay" width="200px">
      <p style="background-color: #000000;color: #ffffff;border-radius: 15px;padding: 5px;font-size: 12px;letter-spacing: 0;">Featured</p>
      <p style="background-color: #000000;color: #ffffff;border-radius: 15px;padding: 5px;font-size: 12px;letter-spacing: 0;">${article.type}</p><br><br>
      <h3>${article.headline}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg><p>${article.author}</p><br><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg><p>${article.date}</p>
  </div></a>
  <span class="popuptext" id="${article.id}"><a href="#">&times;</a><br><h3>${article.headline}</h3><br>${article.content}</span>

  `;
}
//4
function displayArticle4(article, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
  <a href="#${article.id}"><img src="${article.image}" alt="${article.headline}" height="210px" width="210px">
  <div class="overlay" width="200px">
      <p style="background-color: #000000;color: #ffffff;border-radius: 15px;padding: 5px;font-size: 12px;letter-spacing: 0;">Featured</p>
      <p style="background-color: #000000;color: #ffffff;border-radius: 15px;padding: 5px;font-size: 12px;letter-spacing: 0;">${article.type}</p><br><br>
      <h3>${article.headline}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg><p>${article.author}</p><br><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg><p>${article.date}</p>
  </div></a>
  <span class="popuptext" id="${article.id}"><a href="#">&times;</a><br><h3>${article.headline}</h3><br>${article.content}</span>

  `;
}
//side
function displaySideArticles(articles, containerId) {
  const container = document.getElementById(containerId);
  articles.forEach(article => {
      container.appendChild(createSideArticleElement(article));
  });
}

function createSideArticleElement(article) {
  const articleElement = document.createElement('div');
  articleElement.classList.add('article');
  articleElement.innerHTML = `
  <a href="#${article.id}"><ul class="list">
  <li><img src="${article.image}" height=60px width=60px></li>
  <li><h2 style="padding-top: 5px;">${article.headline}</h2>
    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20px">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg> ${article.date}</p>
  </li>
</ul></a>
<span class="popuptext" id="${article.id}"><a href="#">&times;</a><br><h3>${article.headline}</h3><br>${article.content}</span>
  `;
  return articleElement;
}
