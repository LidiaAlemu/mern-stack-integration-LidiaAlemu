// server.js - Main server file for the MERN blog application

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Import routes
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Log requests in development mode
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// API routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'MERN Blog API is running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Using Mock Data'
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    server: 'Running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Mock Data',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
});

// Connect to MongoDB with error handling
const connectDB = async () => {
  try {
    // If using the dummy connection string, use mock data
    if (process.env.MONGODB_URI.includes('cluster0.xxx.mongodb.net')) {
      console.log('⚠️  Using Mock Data - Please configure a real MongoDB connection');
      console.log('📝 API endpoints will work with sample data');
      return;
    }
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.log('⚠️  MongoDB connection failed, using mock data');
    console.log('💡 To use real database:');
    console.log('   1. Create MongoDB Atlas account at https://mongodb.com/atlas');
    console.log('   2. Update MONGODB_URI in .env file with your connection string');
    console.log('   3. Restart the server');
  }
};

// Start server without waiting for MongoDB
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
  
  // Try to connect to DB but don't block server startup
  await connectDB();
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
});

module.exports = app;
