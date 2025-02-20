import { Link } from "react-router-dom";

function TopicsFilter() {
  return (
    <div className="flex space-x-5 mt-4 justify-center">
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
  );
}

export default TopicsFilter;
