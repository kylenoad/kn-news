import React from "react";

function ArticleCard({ title, articleImgUrl, votes }) {
  return (
    <div>
      <img src={articleImgUrl} alt="article image" />
      <p>{title}</p>
      <span> votes: {votes}</span>
    </div>
  );
}

export default ArticleCard;
