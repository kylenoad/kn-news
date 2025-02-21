import { useState, useEffect } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";
import CommentsGrid from "./CommentsGrid";
import Vote from "./Vote";
import ErrorPage from "../../ErrorPage";

function SingleArticlePage() {
  const [selectedArticle, setSelectedArticle] = useState({});
  const { article_id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setSelectedArticle(response.data.article);
      })
      .catch(() => {
        setError(true);
      });
  }, [article_id]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="bg-gray-200 min-h-screen py-8">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <section>
            <img
              src={selectedArticle.article_img_url}
              alt={selectedArticle.title}
              className="w-full h-auto"
            />
            <div>
              <Vote article_id={article_id} />
            </div>
            <h2 className="pl-4 mt-5 text-2xl font-semibold text-blue-800">
              {selectedArticle.title}
            </h2>
            <h3 className="pl-4 mt-1 text-xl font-semibold text-blue-800">
              {selectedArticle.author}
            </h3>

            <div className="mt-2 p-4 bg-gray-100 rounded-lg">
              <h3>{selectedArticle.body}</h3>
            </div>
          </section>
          <div>
            <h3 className="font-bold text-xl pl-4">Comments: </h3>
            <CommentsGrid />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleArticlePage;
