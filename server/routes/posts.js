const express = require('express');
const { mockPosts } = require('./mockData');

const router = express.Router();

// Get all posts - using mock data
router.get('/', async (req, res) => {
  try {
    console.log('📝 Fetching posts from mock data');
    res.json({
      success: true,
      count: mockPosts.length,
      data: mockPosts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching posts',
      error: error.message
    });
  }
});

// Get single post - using mock data
router.get('/:id', async (req, res) => {
  try {
    const post = mockPosts.find(p => p._id === req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching post',
      error: error.message
    });
  }
});

module.exports = router;
