import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const BlogBrowse = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);  // To hold the categories
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");

  // Fetch blogs on component load
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/blogs", {
          params: {
            search,
            category,
            sort,
          },
        });
        setBlogs(res.data);

        // Extract unique categories from the fetched blogs
        const uniqueCategories = [
          ...new Set(res.data.map((blog) => blog.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs(); // Fetch blogs and extract categories
  }, [search, category, sort]); // Re-fetch when search, category, or sort changes

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Browse Blogs</h1>

      {/* Search and Filter Section */}
      <div className="my-4 flex gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title or content"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Date Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Display Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default BlogBrowse;
