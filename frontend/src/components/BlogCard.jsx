import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  console.log("Blog Image URL:", blog.image);
  return (
    <div className="p-4 rounded shadow-md ">
      {/* Blog Image */}
      {blog.image && (
        <img src={`http://localhost:5000${blog.image}`} alt={blog.title} className=" object-cover rounded " />
      )}
      

      {/* Blog Title */}
      <h2 className="text-xl font-bold mt-2">{blog.title}</h2>

      {/* Author Name */}
      <p className="text-gray-600">By {blog.author?.name}</p>

      {/* Blog Date (Removing Time) */}
      <p className="text-gray-500">{new Date(blog.createdAt).toDateString()}</p>

      {/* Blog Snippet */}
      <p className="text-gray-700 mt-2">{blog.content.slice(0, 100)}...</p>

      {/* Read More Link */}
      <Link to={`/blog/${blog._id}`} className="text-blue-500 font-semibold mt-2 inline-block">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
