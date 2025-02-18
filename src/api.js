import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://kn-news.onrender.com/api",
});

export const getArticles = () => {
  return newsApi
    .get("/articles")
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log("error fetching data");
    });
};

export const getArticleById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error fetching article");
    });
};

export const getCommentsbyarticleId = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Couldnt fetch comments");
    });
};
