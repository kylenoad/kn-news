import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://kn-news.onrender.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", { params: topic ? { topic } : {} })
    .then((response) => {
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

export const getCommentsByArticleId = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Couldnt fetch comments");
    });
};

export const getUsers = () => {
  return newsApi
    .get("/users")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error fetching users");
    });
};

export const upVote = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response;
    });
};

export const downVote = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then((response) => {
      return response;
    });
};

export const postNewComment = (article_id, newComment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("comment didn't post");
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
};
