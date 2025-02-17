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
