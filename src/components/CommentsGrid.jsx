import Comment from "./Comment";
import AddComment from "./AddComment";
import { getCommentsByArticleId } from "../api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CommentsGrid() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [deleteMessage, setDeleteMessage] = useState("");

  useEffect(() => {
    getCommentsByArticleId(article_id).then((response) => {
      setComments(response.data.comments);
    });
  }, [article_id]);

  return (
    <div>
      <div>
        <AddComment
          article_id={article_id}
          setComments={setComments}
          comments={comments}
        />
      </div>
      <div>
        {deleteMessage ? (
          <p className="text-red-600 mt-2">{deleteMessage}</p>
        ) : null}
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <Comment
              key={comment.comment_id}
              comment={comment}
              comments={comments}
              setComments={setComments}
              setDeleteMessage={setDeleteMessage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsGrid;
