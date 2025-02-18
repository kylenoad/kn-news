function TopicsFilter({ selectedTopic, setSelectedTopic }) {
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="flex space-x-5 mt-4 justify-center">
      <button
        onClick={() => handleTopicSelect("all")}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        All
      </button>

      <button
        onClick={() => handleTopicSelect("coding")}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Coding
      </button>

      <button
        onClick={() => handleTopicSelect("cooking")}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Cooking
      </button>

      <button
        onClick={() => handleTopicSelect("football")}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Football
      </button>
    </div>
  );
}

export default TopicsFilter;
