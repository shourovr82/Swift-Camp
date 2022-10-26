import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Courses.css'
import CourseItem from './CourseItem'


const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className=''>
      <div className=" courses pb-10 md:pb-0 lg:flex justify-between	">
        <div className='relative'>
          <Sidebar courses={courses}></Sidebar>
        </div>
        <div className=''>
          <br />
          <br />

          <br />
          <div className='grid md:grid-cols-3 relative mx-4 gap-3 '>
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