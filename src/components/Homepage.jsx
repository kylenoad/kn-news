import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import TopicsFilter from "./TopicsFilter";
import ArticleCardGrid from "./ArticleCardGrid";

function Homepage() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topic).then((response) => {
      setArticles(response.data.articles);
    });
  }, [topic]);

  return (
    <>
      <TopicsFilter />
      <ArticleCardGrid articles={articles} />
    </>
  );
}
export default Homepage;
