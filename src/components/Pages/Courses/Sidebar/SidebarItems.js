import React from 'react';

const SidebarItems = ({ course }) => {
  console.log(course);
  const { name, picture, id } = course;
  return (
    <div className=" justify-center mt-2 mx-auto space-y-8 lg:space-y-0">
      <div className="flex items-center justify-center lg:col-span-1 col-span-full">
        <img className='h-24  w-80' src='https://placeimg.com/400/225/arch' alt="" />
      </div>
      <div className="flex flex-col justify-center max-w-3xl  text-center col-span-full lg:col-span-3 lg:text-left">
        <span className=" tracking-wider uppercase  text-xs mt-2 dark:text-violet-400">Step {id} - Nihil</span>
        <span className=" text-teal-900 font-bold md:text-2xl">{name}</span>
        <button className="btn btn-sm my-2">By Now</button>
      </div>
    </div>

  );
};

export default SidebarItems;