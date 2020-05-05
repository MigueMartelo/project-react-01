import React from 'react';

import '../styles/components/Skills.css';

function Skills({ skills }) {
  return (
    <div className='Skills'>
      <h2 className='Skills-title'>Skills</h2>
      {skills && (
        <ul className='Skills-list'>
          {skills.map(skill => (
            <li className='Skills-item' key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.percentage}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Skills;
