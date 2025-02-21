import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-800 p-2 shadow-md">
      <Link to="/home" className="text-white font-semibold hover:underline">
        Home
      </Link>
    </nav>
  );
}

export default NavBar;
