import { useContext, useState, useEffect } from "react";
import { UserAccount } from "../Contexts/UserAccount";
import { getArticleById, upVote, downVote } from "../api";

function Vote({ article_id }) {
  const { loggedOnUser } = useContext(UserAccount);
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [loginMessage, setLoginmessage] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setVotes(response.data.article.votes);
    });
    setHasVoted(false);
  }, [article_id, loggedOnUser]);

  useEffect(() => {
    if (loggedOnUser) {
      setLoginmessage(false);
    }
  }, [loggedOnUser]);

  const handleVote = () => {
    if (!loggedOnUser) {
      setLoginmessage(true);
      return;
    }

    if (!hasVoted) {
      setVotes(votes + 1);
      upVote(article_id);
    } else {
      setVotes(votes - 1);
      downVote(article_id);
    }

    setHasVoted(!hasVoted);
  };

  return (
    <div>
      <button
        onClick={handleVote}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        VOTE
      </button>
      {loginMessage && (
        <p className="text-red-500">You must be logged in to vote</p>
      )}
      {votes}
    </div>
  );
}

export default Vote;
