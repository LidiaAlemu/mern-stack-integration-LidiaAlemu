import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          color: '#343a40'
        }}>
          Welcome to MERN Blog
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          color: '#6c757d'
        }}>
          A full-stack blog application built with MongoDB, Express, React, and Node.js
        </p>
        <Link to="/posts" className="btn btn-primary">
          View All Posts
        </Link>
      </div>
    </div>
  )
}

export default Home
