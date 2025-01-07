import React from 'react';
import './Navba.css';

const Navba = () => {
  return (
    <div className="navbar">
      {/* Top utility bar */}
      <div className="top-bar">
        <div className="container">
          <div className="utility-links">
            <a href="#">Find a Store</a>
            <a href="#">Help</a>
            <a href="#">Join Us</a>
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="main-nav">
        <div className="container">
          <div className="logo">NIKE</div>
          <div className="nav-links">
            <a href="#">New & Featured</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Sale</a>
            <a href="#">SNKRS</a>
          </div>
          <div className="icons" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search"
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginRight: '10px',
              }}
            />
            {/* Favorite button */}
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginRight: '10px',
              }}
              title="Favorite"
            >
              ❤️
            </button>
            {/* Cart button */}
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              title="Cart"
            >
              🛒
            </button>
          </div>
        </div>
      </div>

      {/* Banner Container */}
      <div className="banner-container">
        <div className="container">
          <p className="offer-text">
            🚀 Enjoy up to <strong>50% off</strong> on select items! Limited-time offers. <a href="#" className="shop-now">Shop now</a>!
          </p>
        </div>
      </div> 
    </div>
  );
};

export default Navba;
