import React from 'react';
import '../styles/components/Languages.css';

function Languages({ languages }) {
  return (
    <div className='Languages'>
      <h2 className='Languages-title'>Languages</h2>
      {languages && (
        <ul className='Languages-list'>
          {languages.map(language => (
            <li className='Languages-item' key={language.name}>
              <h3>{language.name}</h3>
              <p>{language.percentage}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Languages;
