import React from 'react';
import SidebarItems from './SidebarItems';
import loadingphoto from '../../../../Assets/loading2.svg'

const Sidebar = ({ courses, loading }) => {




  return (
    <aside className="w-full border-r-4  sm:w-80  dark:text-gray-100">
      <nav className="space-y-8 text-sm ">
        <section className=" dark:text-gray-100 md:pb-96">
          <div className="container mx-auto flex flex-col p-6 ">
            <h2 className="py-4 pb-20 text-3xl font-bold text-center">All Courses</h2>
            <div className="divide-y divide-gray-700">
              <div className=' flex absolute top-20 z-10 justify-center w-full mx-auto'>

                {loading &&

                  <img src={loadingphoto} className='flex w-20 justify-center ' alt="" />
                }
              </div>

              {
                courses.map(course => <SidebarItems
                  key={course.id}
                  course={course}
                ></SidebarItems>)
              }
            </div>
          </div>
        </section>
      </nav>
    </aside>
  );
};

export default Sidebar;