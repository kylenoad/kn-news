import { useState, useContext } from "react";
import { UserAccount } from "../Contexts/UserAccount";
import Login from "./Login";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const { loggedOnUser } = useContext(UserAccount);

  const handleLoginScreenClick = () => {
    setShowLogin(true);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-500">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Toggle Theme
      </button>
      <h1 className="mt-5 text-3xl font-semibold text-gray-800">KN News</h1>
      <button
        onClick={handleLoginScreenClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Login
      </button>
      {loggedOnUser && (
        <div className="flex items-center ml-4">
          <img
            src={loggedOnUser.avatar_url}
            alt={loggedOnUser.name}
            className="w-10 h-10"
          />
        </div>
      )}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </header>
  );
}

export default Header;
