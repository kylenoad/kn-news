import React from "react";
import { FaThumbsUp } from "react-icons/fa";

function ArticleCard({ title, articleImgUrl, votes, author }) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <img src={articleImgUrl} alt="article image" />
      <div className="p-4">
        <h2 className="text-l font-semibold text-gray-800">{title}</h2>
        <p className="mt-1 text-xs text-gray-500">
          Posted by: <span className="font-medium text-blue-500">{author}</span>
        </p>
        <div className="mt-3 flex items-center text-sm text-gray-600">
          <FaThumbsUp className="text-blue-500 mr-2" />
          <span className="font-semibold text-gray-800"> {votes}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
