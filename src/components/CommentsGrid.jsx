import Comment from "./Comment";
import AddComment from "./AddComment";
import { getCommentsByArticleId } from "../api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CommentsGrid() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((response) => {
      setComments(response.data.comments);
    });
  }, [article_id]);

  return (
    <div className="w-3/4 mx-auto">
      <div className="mb-6">
        <AddComment
          article_id={article_id}
          setComments={setComments}
          comments={comments}
        />
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsGrid;
