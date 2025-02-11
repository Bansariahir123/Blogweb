import { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/comments/${blogId}`)
      .then(res => setComments(res.data))
      .catch(err => console.error(err));
  }, [blogId]);

  const submitComment = () => {
    axios.post(`http://localhost:5000/api/comments`, { blogId, content: comment })
      .then(res => setComments([...comments, res.data]))
      .catch(err => console.error(err));
    setComment("");
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Comments</h2>
      {comments.map((c, index) => (
        <p key={index} className="bg-gray-100 p-2 rounded my-2">{c.content}</p>
      ))}
      <textarea
        className="w-full border p-2 mt-2"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded" onClick={submitComment}>Submit</button>
    </div>
  );
};

export default CommentSection;
