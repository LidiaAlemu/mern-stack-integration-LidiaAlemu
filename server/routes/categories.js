const express = require('express');
const { mockCategories } = require('./mockData');

const router = express.Router();

// Get all categories - using mock data
router.get('/', async (req, res) => {
  try {
    console.log('📂 Fetching categories from mock data');
    res.json({
      success: true,
      count: mockCategories.length,
      data: mockCategories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message
    });
  }
});

// Create category - using mock data
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    
    const newCategory = {
      _id: Date.now().toString(),
      name,
      description,
      createdAt: new Date(),
      slug: name.toLowerCase().replace(/ /g, '-')
    };
    
    mockCategories.push(newCategory);
    
    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      data: newCategory
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating category',
      error: error.message
    });
  }
});

module.exports = router;
