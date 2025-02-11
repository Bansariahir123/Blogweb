const express = require('express');
const Blog = require('../models/Blog');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/upload'); // Multer for image uploads

const router = express.Router();

//  Create a new blog post (with image upload)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : ""; // Image path

        const newPost = new Blog({
            title,
            content,
            category,
            image: imageUrl,
            author: req.user.id
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all blog posts with search, filter, and sort
router.get('/', async (req, res) => {
    try {
        let { search, category, sort } = req.query;
        let filter = {};

        // Search by title or content
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: "i" } },
                { content: { $regex: search, $options: "i" } }
            ];
        }

        // Filter by category
        if (category) {
            filter.category = category;
        }

        // Sorting (default: newest first)
        let sortOption = { createdAt: -1 }; // -1 for descending (newest first)
        if (sort === "oldest") {
            sortOption = { createdAt: 1 }; // 1 for ascending (oldest first)
        }

        // Fetch blogs with filters and sorting
        const blogs = await Blog.find(filter).populate('author', 'name').sort(sortOption);

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Get a single blog post by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author', 'name');
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a blog post
router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const { title, content, category } = req.body;
        let updatedFields = { title, content, category };

        if (req.file) updatedFields.image = `/uploads/${req.file.filename}`;

        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedFields, { new: true });

        if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });

        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a blog post
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });

        res.json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
