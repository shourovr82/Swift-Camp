import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Courses.css'
import CourseItem from './CourseItem'


const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <div className=''>
      <div className=" bg-slate-500 lg:flex justify-between	">
        <div className='relative'>
          <Sidebar></Sidebar>
        </div>
        <div className=''>
          <br />
          <br />

          <br />
          <div className='grid md:grid-cols-3 mx-4 gap-3'>
            {
              courses.map(course => <CourseItem
                key={course.id}
                course={course}
              ></CourseItem>)
            }
          </div>
        </div>

      </div>


    </div>
  );
};

export default Courses;