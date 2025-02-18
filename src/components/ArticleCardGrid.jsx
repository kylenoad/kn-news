import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function ArticleCardGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 gap-3 p-4 lg:grid-cols-3">
      {articles.map((article) => (
        <Link to={`/articles/${article.article_id}`} key={article.article_id}>
          <ArticleCard
            title={article.title}
            articleImgUrl={article.article_img_url}
            body={article.body}
            votes={article.votes}
          />
        </Link>
      ))}
    </div>
  );
}

export default ArticleCardGrid;
