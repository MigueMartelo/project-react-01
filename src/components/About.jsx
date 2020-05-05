import React from 'react';
import '../styles/components/About.css';

function About({ jobTitle,
  address,
  phone,
  website,
  email }) {
  return (
    <>
      <h2 className='Header-job-title About-title'>{jobTitle}</h2>
      <p className='Header-phone About-item'>{phone}</p>
      <a href='mailto:miguemartelo1031@gmail.com' className='Header-email About-item'>{email}</a>
      <a href={website} className='Header-website About-item'>{website}</a>
      <p className='Header-address About-item'>{address}</p>
    </>
  );
}

export default About;
