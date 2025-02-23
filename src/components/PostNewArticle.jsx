import { useState, useContext } from "react";
import { postArticle } from "../api";
import { UserAccount } from "../Contexts/UserAccount";

function PostNewArticle() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");
  const [articleImgUrl, setArticleImgUrl] = useState("");
  const [message, setMessage] = useState("");
  const { loggedOnUser } = useContext(UserAccount);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newArticle = {
      title,
      topic,
      author: loggedOnUser.username,
      body,
      article_img_url: articleImgUrl || undefined,
    };

    postArticle(newArticle)
      .then(() => {
        setMessage("Article posted successfully!");
        setTitle("");
        setTopic("");
        setBody("");
        setArticleImgUrl("");
      })
      .catch(() => {
        console.error("Error posting article");
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Post a New Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="6"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            value={articleImgUrl}
            onChange={(e) => setArticleImgUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Optional"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default PostNewArticle;
