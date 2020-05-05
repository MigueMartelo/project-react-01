import React from 'react';
import '../styles/components/Experience.css';

function Experience({ experiences }) {
  return (
    <div className='Experience'>
      <h2 className='Experience-title'>
        Experience
      </h2>
      <div className='Experiences-list'>
        {experiences && (
          <ul>
            {experiences.map(experience => (
              <li className='Experience-item' key={experience.endDate}>
                <h3>{experience.company}</h3>
                <h4>{experience.jobTitle}</h4>
                <p>{experience.jobDescription}</p>
                <p>
                  <span>{experience.startDate}</span>
                  -
                  <span>{experience.endDate}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Experience;
