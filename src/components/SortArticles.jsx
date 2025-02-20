function SortArticles({ sortBy, setSortBy, order, setOrder }) {
  return (
    <div className="flex space-x-5 mt-4 justify-center">
      <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
        className="bg-gray-200 border border-gray-300 rounded py-2 px-4"
      >
        <option value="created_at">Sort by Date</option>
        <option value="votes">Sort by Votes</option>
        <option value="comment_count">Sort by Comment Count</option>
      </select>
      <select
        value={order}
        onChange={(event) => setOrder(event.target.value)}
        className="bg-gray-200 border border-gray-300 rounded py-2 px-4"
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
}

export default SortArticles;
