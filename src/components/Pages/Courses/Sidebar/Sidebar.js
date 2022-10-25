import React from 'react';
import SidebarItems from './SidebarItems';

const Sidebar = ({ courses }) => {




  return (
    <aside className="w-full border-r-4  sm:w-80  dark:text-gray-100">
      <nav className="space-y-8 text-sm ">
        <section className="backdrop-brightness-75 dark:text-gray-100 pb-96">
          <div className="container mx-auto flex flex-col p-6">
            <h2 className="py-4 pb-20 text-3xl font-bold text-center">All Courses</h2>
            <div className="divide-y divide-gray-700">

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