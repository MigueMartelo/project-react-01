import React from 'react';
import '../styles/components/Header.css';

function Header({ img, name, children }) {
  return (
    <header className='Header'>
      <img src={img} alt={name} />
      <div>
        <h1 className='Header-title'>{name}</h1>
        {children}
      </div>
    </header>
  );
}

export default Header;
