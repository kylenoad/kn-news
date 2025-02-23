import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserAccount } from "../Contexts/UserAccount";

function TopicsFilter() {
  const { loggedOnUser } = useContext(UserAccount);
  return (
    <div className="flex flex-col space-y-2 items-center">
      <div className="flex space-x-5">
        <Link
          to="/home"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          All
        </Link>

        <Link
          to="/home/coding"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Coding
        </Link>

        <Link
          to="/home/cooking"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Cooking
        </Link>

        <Link
          to="/home/football"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Football
        </Link>
      </div>

      {loggedOnUser ? (
        <Link
          to="/post-article"
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-4"
        >
          Post Article
        </Link>
      ) : null}
    </div>
  );
}

export default TopicsFilter;
