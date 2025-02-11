const express = require('express');
const Comment = require('../models/Comment');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add a new comment
router.post('/:blogId', authMiddleware, async (req, res) => {
    try {
        const newComment = new Comment({
            blogId: req.params.blogId,
            userId: req.user.id,
            comment: req.body.comment
        });

        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all comments for a blog post
router.get('/:blogId', async (req, res) => {
    try {
        const comments = await Comment.find({ blogId: req.params.blogId }).populate('userId', 'name');
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a comment
router.put('/:commentId', authMiddleware, async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.commentId, { comment: req.body.comment }, { new: true });

        if (!updatedComment) return res.status(404).json({ message: "Comment not found" });

        res.json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a comment
router.delete('/:commentId', authMiddleware, async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);

        if (!deletedComment) return res.status(404).json({ message: "Comment not found" });

        res.json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

