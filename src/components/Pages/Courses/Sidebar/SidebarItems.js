import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItems = ({ course }) => {
  console.log(course);
  const { name, picture, id } = course;
  return (
    <div className=" flex  gap-3 items-center mt-2 mx-auto space-y-8 lg:space-y-0 p-3">
      <div className=" items-center justify-center lg:col-span-1 col-span-full">
        <Link to={`/course/${id}`}>
          <img className='w-[80px]' src={picture} alt="" />
        </Link>
      </div>
      <div className="flex flex-col   text-center col-span-full lg:col-span-3 lg:text-left">
        <Link to={`/course/${id}`}>
          <span className=" text-white font-bold ">{name}</span>
        </Link>
      </div>

    </div>

  );
};

export default SidebarItems;