import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <Link to="/home" className="text-white font-semibold hover:underline">
        Home
      </Link>
    </nav>
  );
}

export default NavBar;
