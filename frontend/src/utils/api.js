import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Blogs API calls
export const fetchBlogs = () => API.get("/blogs");
export const fetchBlogById = (id) => API.get(`/blogs/${id}`);
export const createBlog = (data) => API.post("/blogs", data, { headers: { "Content-Type": "multipart/form-data" } });
export const updateBlog = (id, data) => API.put(`/blogs/${id}`, data, { headers: { "Content-Type": "multipart/form-data" } });
export const fetchUserBlogs = (userId) => API.get(`/blogs/user/${userId}`);
// Auth API calls
export const registerUser = (formData) =>
  API.post("/auth/register", formData, {
    headers: { "Content-Type": "multipart/form-data" }, // Required for file uploads
  });

export const loginUser = (credentials) => API.post("/auth/login", credentials);

export const fetchUserProfile = (id, token) =>
  API.get(`/auth/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateProfileImage = (formData, token) =>
  API.put("/auth/update-profile-image", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data", // Ensures correct handling of file uploads
    },
  });

