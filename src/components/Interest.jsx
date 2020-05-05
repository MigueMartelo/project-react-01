import React from 'react';
import '../styles/components/Interest.css';

function Interest({ interest }) {
  return (
    <div className='Interest'>
      <h2 className='Interest-title'>Interest</h2>
      {interest && (
        <ul className='Interest-list'>
          {interest.map(item => (
            <li key={item}>
              <h3 className='Interest-item'>{item}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Interest;
