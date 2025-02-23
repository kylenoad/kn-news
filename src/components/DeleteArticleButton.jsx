import { useNavigate } from "react-router-dom";
import { deleteArticle } from "../api";

function DeleteButton({ article_id, author, loggedOnUser }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteArticle(article_id)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.error("Error deleting article");
      });
  };

  if (loggedOnUser && loggedOnUser.username === author) {
    return (
      <div className="flex justify-end mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete Article
        </button>
      </div>
    );
  }

  return null;
}

export default DeleteButton;
