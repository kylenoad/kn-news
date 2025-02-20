import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import TopicsFilter from "./TopicsFilter";
import ArticleCardGrid from "./ArticleCardGrid";

function Homepage() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getArticles(topic, "votes", order).then((response) => {
      setArticles(response.data.articles);
    });
  }, [topic, order]);

  return (
    <>
      <TopicsFilter />
      <div className="flex space-x-5 mt-4 justify-center">
        <select
          value={order}
          onChange={(event) => setOrder(event.target.value)}
          className="bg-gray-200 border border-gray-300 rounded py-2 px-4"
        >
          <option value="asc">Votes Ascending</option>
          <option value="desc">Votes Descending</option>
        </select>
      </div>
      <ArticleCardGrid articles={articles} />
    </>
  );
}
export default Homepage;
