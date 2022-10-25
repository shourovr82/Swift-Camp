import React from 'react';
import HeroArea from './HeroArea';
import './Home.css'

const Home = () => {
  return (
    <div className='bg-hero-image w-full h-screen bg-cover bg-center flex items-center '>
      <div className='uppercase text-center text-white font-extrabold'>
        <h1 className=''>Swift Camp</h1>
      </div>
      <HeroArea></HeroArea>

    </div>
  );
};

export default Home;