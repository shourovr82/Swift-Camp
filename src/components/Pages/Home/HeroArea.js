import React from 'react';
import { Link } from 'react-router-dom';

const HeroArea = () => {
  return (

    <div>

      <section className=" text-gray-100 pb-20">
        <div className="container mt-28 mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-2xl font-bold leading-none md:text-5xl font-serif">Start learning from
            the world’s best  institution
            <br />
            <span className='text-4xl text-red-500'>
              SWIFT CAMP
            </span>
          </h1>
          <div className="flex mt-10 flex-wrap justify-center">
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