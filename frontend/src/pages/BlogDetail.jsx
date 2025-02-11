import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CommentSection from "../components/CommentSection";
import { useSelector } from "react-redux"; 

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => {
        setBlog(res.data);
        if (user && res.data.author && res.data.author._id === user.id) {
          setIsOwner(true); // Check if the logged-in user is the owner of the blog
        }
      })
      .catch(err => console.error(err));
  }, [id, user]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        await axios.delete(`http://localhost:5000/api/blogs/${id}`, { headers });
        navigate("/blog-browse");
        toast.success("Blog deleted successfully!");
      } catch (error) {
        toast.error("Error deleting blog.");
      }
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-600">By {blog.author?.name}</p>

      {/* Blog Date (Removing Time) */}
      <p className="text-gray-500">{new Date(blog.createdAt).toDateString()}</p>
      <img src={`http://localhost:5000${blog.image}`} alt={blog.title} className="w-full my-4 rounded-md"/>
      <p className="text-lg">{blog.content}</p>
      
      {isOwner && (
        <div className="mt-4">
          <button
            onClick={() => navigate(`/create/${id}`)}
            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          >
            Update Blog
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Delete Blog
          </button>
        </div>
      )}

      <CommentSection blogId={id} />
    </div>
  );
};

export default BlogDetail;

