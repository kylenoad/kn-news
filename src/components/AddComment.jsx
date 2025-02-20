import { useContext, useState } from "react";
import { UserAccount } from "../Contexts/UserAccount";
import { postNewComment } from "../api";
import { useParams } from "react-router-dom";

function AddComment({ comments, setComments }) {
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const { loggedOnUser } = useContext(UserAccount);
  const { article_id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();

    if (!loggedOnUser) {
      setLoginMessage("You must be logged in to post");
      return;
    }

    const newComment = {
      username: loggedOnUser.username,
      body: comment,
    };

    postNewComment(article_id, newComment)
      .then((response) => {
        const updatedComments = [response.data.comment, ...comments];
        setComments(updatedComments);
        setComment("");
        setMessage("Comment sucessfully posted!");
      })
      .catch((err) => {
        setMessage("Failed to post message.");
      });
  }

  return (
    <>
      <form className="w-full bg-white p-4 rounded-md shadow-sm flex flex-col gap-1 border border-gray-300">
        <input
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="write comment..."
          className="border rounded-md px-3 h-20"
        />

        <button
          onClick={handleSubmit}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>
      {message ? <div className="text-green-600 mt-2">{message}</div> : null}
      {loginMessage ? (
        <div className="text-red-600 mt-2">{loginMessage}</div>
      ) : null}
    </>
  );
}

export default AddComment;
