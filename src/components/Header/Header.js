import React from 'react';

const Header = () => {
  return (
    <nav className='header'>
      <div className='header-logo'>
        <h2>Pigeon Fair</h2>
        <img src="" alt="" />
      </div>
      <div>
        <a href="/home">Home</a>
        <a href="/offers">Offers</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;