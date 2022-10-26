import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItems = ({ course }) => {
  console.log(course);
  const { name, picture, id } = course;
  return (
    <div className=" flex  gap-3 items-center mt-2 p-3">
      <div className=" lg:col-span-1 col-span-full">
        <Link to={`/course/${id}`}>
          <img className='w-[80px]' src={picture} alt="" />
        </Link>
      </div>
      <div className=" ">
        <Link to={`/course/${id}`}>
          <span className=" text-white text-lg font-bold ">{name}</span>
        </Link>
      </div>



    </div>

  );
};

export default SidebarItems;