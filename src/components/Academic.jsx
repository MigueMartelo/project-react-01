import React from 'react';
import '../styles/components/Academic.css';

function Academic({ academic }) {
  return (
    <div className='Academic'>
      <h2 className='Academic-title'>Academic</h2>
      {academic && (
        <ul>
          {academic.map(academy => (
            <li className='Academic-item' key={academy.startDate}>
              <h3>{academy.degree}</h3>
              <p>{academy.description}</p>
              <p><strong>{academy.institution}</strong></p>
              <p>
                {academy.startDate}
                /
                {academy.endDate}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Academic;
