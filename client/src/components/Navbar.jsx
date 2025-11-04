import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#343a40',
      padding: '1rem 0',
      marginBottom: '2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link 
            to="/" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            MERN Blog
          </Link>
          <div>
            <Link 
              to="/" 
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '1rem'
              }}
            >
              Home
            </Link>
            <Link 
              to="/posts" 
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Posts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
