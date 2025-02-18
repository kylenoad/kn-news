import { useState, useEffect } from "react";
import { getArticles } from "../api";

import TopicsFilter from "./TopicsFilter";
import ArticleCardGrid from "./ArticleCardGrid";

function Homepage() {
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(selectedTopic).then((response) => {
      setArticles(response.data.articles);
    });
  }, [selectedTopic]);

  const filteredArticles =
    selectedTopic === "all"
      ? articles
      : articles.filter((article) => article.topic === selectedTopic);

  return (
    <>
      <TopicsFilter
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <ArticleCardGrid articles={filteredArticles} />
    </>
  );
}

export default Homepage;
