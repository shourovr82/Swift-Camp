import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Courses.css'
import CourseItem from './CourseItem'
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import loadingphoto from '../../../../Assets/loading2.svg'


const Courses = () => {
  const { theme } = useContext(AuthContext)
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    fetch('https://swift-camp-server.vercel.app/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data)
        setLoading(false)
      })

  }, [])


  return (
    <div className=''>
      <div className=' flex absolute top-20 z-10 justify-center w-full mx-auto'>

        {loading &&

          <img src={loadingphoto} className='flex justify-center ' alt="" />
        }
      </div>

      <div className={theme === 'light' ? '  courses pb-10 md:pb-0 lg:flex justify-between	' : '  courses-dark pb-10 md:pb-0 lg:flex justify-between	'}>
        <div className='relative'>
          <Sidebar loading={loading} courses={courses}></Sidebar>
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