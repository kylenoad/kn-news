import { useContext, useState } from "react";
import { UserAccount } from "../Contexts/UserAccount";
import { getUsers } from "../api";

function Login({ setShowLogin }) {
  const { loggedOnUser, setLoggedOnUser } = useContext(UserAccount);
  const [username, setUsername] = useState("");
  const [incorrectUsername, setIncorrectUsername] = useState("");

  const handleLogin = () => {
    getUsers().then((response) => {
      console.log(response);
      const users = response.data.users;
      const user = users.find((user) => user.username === username);

      if (user) {
        setLoggedOnUser(user);
        setShowLogin(false);
        setIncorrectUsername("");
      } else {
        setIncorrectUsername("username does not exist!");
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-200 opacity-95 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          className="border p-2 w-full mb-4 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {incorrectUsername && (
          <p className="text-red-500 text-sm mb-4">{incorrectUsername}</p>
        )}
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <button
          onClick={() => setShowLogin(false)}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded w-full mt-2 hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Login;
