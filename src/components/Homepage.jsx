import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import TopicsFilter from "./TopicsFilter";
import ArticleCardGrid from "./ArticleCardGrid";
import SortArticles from "./SortArticles";
import ErrorPage from "../../ErrorPage";

function Homepage() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [error, setError] = useState(false);

  useEffect(() => {
    getArticles(topic, sortBy, order)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch(() => {
        setError(true);
      });
  }, [topic, sortBy, order]);

  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      <TopicsFilter />
      <SortArticles
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
      <ArticleCardGrid articles={articles} />
    </>
  );
}
export default Homepage;
