function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-500">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Toggle Theme
      </button>
      <h1 className="mt-5 text-3xl font-semibold text-gray-800">KN News</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Login
      </button>
    </header>
  );
}

export default Header;
