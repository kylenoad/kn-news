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
    <header className="flex justflex justify-between items-center p-5 ">
      <h1 className="text-3xl font-extrabold tracking-tight text-black">
        KN News
      </h1>
      <button
        onClick={handleLoginScreenClick}
        className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition duration-200"
      >
        Login
      </button>
      {loggedOnUser && (
        <div className="flex items-center ml-4">
          <img
            src={loggedOnUser.avatar_url}
            alt={loggedOnUser.name}
            className="w-12 h-12 rounded-full border-4 border-white shadow-lg hover:shadow-2xl"
          />
        </div>
      )}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </header>
  );
}

export default Header;
