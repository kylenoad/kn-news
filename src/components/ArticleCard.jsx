import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article_id, title, articleImgUrl, votes }) {
  return (
    <div>
      <Link to={`/articles/${article_id}`}>
        <img src={articleImgUrl} alt="article image" />
        <p>{title}</p>
      </Link>
      <span> votes: {votes}</span>
    </div>
  );
}

export default ArticleCard;
