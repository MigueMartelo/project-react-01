import React from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useGetData from '../hooks/useGetData';

const App = () => {
  const data = useGetData();
  return (
    <div className='container'>
      <Header name={data.name} img={data.avatar}>
        <About jobTitle={data.profession} address={data.address} phone={data.phone} website={data.website} email={data.email} />
      </Header>
      <Profile profile={data.Profile} />
      <Experience experiences={data.experience} />
      <Academic academic={data.Academic} />
      <Skills skills={data.skills} />
      <Interest interest={data.interest} />
      <Languages languages={data.languages} />
    </div>
  );
};

export default App;
