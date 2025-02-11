require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const app = express();
app.use(cors({
    origin: FRONTEND_URL, 
    credentials: true,}));
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/uploads', express.static('uploads'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
