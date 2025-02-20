import React from "react";
import { UserAccount } from "../Contexts/UserAccount";
import { deleteComment } from "../api";
import { useContext, useState } from "react";

function Comment({ comment, setComments, comments, setDeleteMessage }) {
  const { loggedOnUser } = useContext(UserAccount);

  function handleDelete() {
    deleteComment(comment.comment_id).then(() => {
      const updatedComments = comments.filter(
        (remainingComments) =>
          remainingComments.comment_id !== comment.comment_id
      );
      setComments(updatedComments);
      setDeleteMessage("Comment deleted successfully!");
    });
  }

  return (
    <>
      <div className="border border-gray-300 p-6 mb-2 rounded-lg">
        <p className="font-bold">{comment.author}:</p>
        <p>{comment.body}</p>
      </div>
      <div>
        {loggedOnUser && loggedOnUser.username === comment.author ? (
          <button
            onClick={handleDelete}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            DELETE
          </button>
        ) : null}
      </div>
    </>
  );
}

export default Comment;
