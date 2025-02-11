
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBlog, fetchBlogById, updateBlog } from "../utils/api";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import axios from "axios"; // Import axios to make API requests
import parse from 'html-react-parser';

const CreateEditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { id } = useParams();

  // Check if user is logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // If editing, fetch the existing blog post
  useEffect(() => {
    if (id) {
      setIsEdit(true);
      fetchBlogById(id)
        .then((response) => {
          const blog = response.data;
          setTitle(blog.title);
          setContent(blog.content);
          setCategory(blog.category);
          setImage(blog.image);
        })
        .catch((error) => {
          toast.error("Error fetching blog post.");
        });
    }
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    


    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (image) formData.append("image", image);

    const token = localStorage.getItem("token"); // Get the token from localStorage

    try {
      const headers = {
        Authorization: `Bearer ${token}`, // Include the token in the headers
      };

      if (isEdit) {
        await axios.put(`http://localhost:5000/api/blogs/${id}`, formData, { headers });
        toast.success("Blog updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/blogs", formData, { headers });
        toast.success("Blog created successfully!");
      }
      navigate("/blog-browse");
    } catch (error) {
      toast.error("Error creating/updating blog.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? "Edit Blog" : "Create Blog"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-semibold">Content</label>
          <JoditEditor
            value={content}
            onChange={(newContent) => setContent(newContent)}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-semibold">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full p-2 border rounded mt-2"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 mt-4 rounded">
          {isEdit ? "Update Blog" : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateEditBlog;
