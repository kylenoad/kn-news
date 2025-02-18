import React from "react";

function Comment({ comment }) {
  return (
    <div className="border border-gray-300 p-6 mb-2 rounded-lg">
      <p className="font-bold">{comment.author}:</p>
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;
