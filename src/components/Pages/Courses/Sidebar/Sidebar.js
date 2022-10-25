import React from 'react';
import SidebarItems from './SidebarItems';

const Sidebar = ({ courses }) => {
  console.log(courses);
  return (
    <aside className="w-full border-r-4  sm:w-80  dark:text-gray-100">
      <nav className="space-y-8 text-sm">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto flex flex-col p-6">
            <h2 className="py-4 text-3xl font-bold text-center">All Courses</h2>
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