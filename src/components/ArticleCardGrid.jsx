import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticleCardGrid() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-3 p-4 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.article_id}
          title={article.title}
          articleImgUrl={article.article_img_url}
          body={article.body}
          votes={article.votes}
        />
      ))}
    </div>
  );
}

export default ArticleCardGrid;
