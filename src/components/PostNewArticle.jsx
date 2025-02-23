import { useState, useContext } from "react";
import { postArticle } from "../api";
import { UserAccount } from "../Contexts/UserAccount";

function PostNewArticle() {
  const { loggedOnUser } = useContext(UserAccount);
  const [title, setTitle] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [body, setBody] = useState("");
  const [articleImgUrl, setArticleImgUrl] = useState("");
  const [message, setMessage] = useState("");

  const topics = ["coding", "cooking", "football"];

  const handleSubmit = (event) => {
    event.preventDefault();

    const defaultImg =
      "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?w=700&h=700";

    const newArticle = {
      title,
      topic: selectedTopic,
      author: loggedOnUser.username,
      body,
      article_img_url: articleImgUrl || defaultImg,
    };

    postArticle(newArticle)
      .then(() => {
        setMessage("Article posted successfully!");
        setTitle("");
        setSelectedTopic("");
        setBody("");
        setArticleImgUrl("");
      })
      .catch(() => {
        console.error("Error posting article:");
        setMessage("Error posting article. Please try again.");
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
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a topic</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
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
