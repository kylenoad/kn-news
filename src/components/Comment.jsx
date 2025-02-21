import React from "react";
import { UserAccount } from "../Contexts/UserAccount";
import { deleteComment, getUsers } from "../api";
import { useContext, useState, useEffect } from "react";

function Comment({ comment, setComments, comments, setDeleteMessage }) {
  const { loggedOnUser } = useContext(UserAccount);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    getUsers().then((response) => {
      const user = response.data.users.find(
        (user) => user.username === comment.author
      );
      setAvatarUrl(user.avatar_url);
    });
  }, []);

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
    <div className="border border-gray-300 p-6 mb-2 rounded-lg">
      <div className="flex items-center mb-2">
        <img
          src={avatarUrl}
          alt={`${comment.author}`}
          className="w-10 h-10 rounded-full object-cover mr-2"
        />
        <p className="font-bold">{comment.author}</p>
      </div>
      <p>{comment.body}</p>
      {loggedOnUser && loggedOnUser.username === comment.author ? (
        <button
          onClick={handleDelete}
          className="mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          DELETE
        </button>
      ) : null}
    </div>
  );
}

export default Comment;
