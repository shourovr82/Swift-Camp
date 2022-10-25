import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
  // console.log(course);
  const { id, name, picture, subtitle } = course;
  return (
    <div className="card  relative bg-base-100 shadow-xl">
      <figure className="">
        <img src={picture} alt="Shoes" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="card-body px-4 py-10 h-56 items-center ">
        <h2 className="card-title">{name}!</h2>
        <p>{subtitle ? subtitle.slice(0, 70) + '...' : ''}</p>
        <div className="card-actions  absolute bottom-0 mb-2">
          <Link to={`/course/${id}`}>
            <button
              className="btn bg-red-800 border-0 text-white font-bold rounded-md  bottom-0">See Details <FaInfoCircle className='ml-3 text-2xl'></FaInfoCircle> </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;