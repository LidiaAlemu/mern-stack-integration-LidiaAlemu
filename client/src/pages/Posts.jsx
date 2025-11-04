import React, { useState, useEffect } from 'react'
import { postService } from '../services/api'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await postService.getAllPosts()
        setPosts(response.data)
        setError('')
      } catch (err) {
        setError('Failed to fetch posts')
        console.error('Error fetching posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="container">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Blog Posts</h1>
      <div style={{ display: 'grid', gap: '2rem' }}>
        {posts.map(post => (
          <div 
            key={post._id}
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>{post.title}</h2>
            <p style={{ 
              color: '#6c757d', 
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              {post.excerpt}
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#007bff' }}>
                Category: {post.category?.name}
              </span>
              <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                By {post.author?.username}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
