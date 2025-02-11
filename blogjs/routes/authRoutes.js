const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const upload = require('../middleware/upload'); 

// Register (with optional profile image upload)
router.post('/register', upload.single('profileImage'), async (req, res) => {
    const { name, email, password } = req.body;
    const profileImage = req.file ? req.file.path : ''; // Save file path if uploaded

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, profileImage });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '50h' });
        res.json({ token, userId: user._id, name: user.name, profileImage: user.profileImage,});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Update Profile Image (Protected)
router.put('/update-profile-image', upload.single('profileImage'), async (req, res) => {
    const userId = req.body.userId;
    
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.profileImage = req.file ? req.file.path : user.profileImage; // Update image if uploaded
        await user.save();

        res.json({ message: "Profile image updated successfully!", profileImage: user.profileImage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;



// Get All Users (Public Route)
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password field for security
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get User by ID (Protected Route)
router.get('/users/:id', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password'); // Exclude password field
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
