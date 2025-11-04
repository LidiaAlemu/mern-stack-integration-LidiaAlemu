// Temporary mock data for testing without MongoDB
const mockPosts = [
  {
    _id: '1',
    title: 'Welcome to MERN Blog',
    content: 'This is our first blog post! Welcome to our MERN stack blog application.',
    author: { username: 'admin' },
    category: { name: 'General' },
    createdAt: new Date(),
    featuredImage: 'default-post.jpg',
    slug: 'welcome-to-mern-blog',
    excerpt: 'Introduction to our MERN stack blog application',
    tags: ['mern', 'blog', 'tutorial'],
    isPublished: true,
    viewCount: 42
  },
  {
    _id: '2', 
    title: 'Getting Started with MERN Stack',
    content: 'Learn how to build full-stack applications with MongoDB, Express, React, and Node.js.',
    author: { username: 'admin' },
    category: { name: 'Technology' },
    createdAt: new Date(),
    featuredImage: 'mern-stack.jpg',
    slug: 'getting-started-with-mern-stack',
    excerpt: 'Complete guide to starting with MERN stack development',
    tags: ['mern', 'javascript', 'fullstack'],
    isPublished: true,
    viewCount: 25
  }
];

const mockCategories = [
  {
    _id: '1', 
    name: 'Technology',
    description: 'Tech related posts',
    slug: 'technology'
  },
  {
    _id: '2',
    name: 'General', 
    description: 'General discussion posts',
    slug: 'general'
  },
  {
    _id: '3',
    name: 'Programming',
    description: 'Programming tutorials and tips',
    slug: 'programming'
  }
];

module.exports = { mockPosts, mockCategories };
