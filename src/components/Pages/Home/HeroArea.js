import React from 'react';
import { Link } from 'react-router-dom';

const HeroArea = () => {
  return (

    <div>

      <section className=" text-gray-100 w-4/5 mx-auto h-[100vh] flex items-center">
        <div className="container mx-auto flex flex-col items-center px-4  text-center ">
          <h1 className="text-2xl font-bold leading-none md:text-5xl font-serif">Start learning from
            the world’s best  institution
            <br />
            <span className='text-4xl text-red-500'>
              SWIFT CAMP
            </span>
          </h1>
          <div className="flex flex-wrap justify-center">
            <Link to='/courses'>
              <button className="px-8 py-3 m-2 text-lg hover:bg-red-800 btn-outline font-semibold rounded border text-white ">Explore all courses </button>
            </Link>
          </div>
        </div>

      </section>
      <div>

      </div>

    </div>
  );
};

export default HeroArea;