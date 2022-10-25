import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import './Courses.css'


const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  const { name, about, balance, company, picture, registered } = courseDetails;

  return (
    <div className='details'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="p-6 mx-10 text-gray-100 backdrop-blur-lg border-yellow-700 border-2 rounded-lg shadow-xl">
        <div className='flex justify-center'> <button
          title='Download Pdf'
          className='bg-red-800 p-2 rounded-full shadow-xl '>
          <FaFilePdf className='text-3xl'></FaFilePdf>
        </button></div>
        <div className="container md:flex gap-6 mx-auto text-center items-center justify-between lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-2/4 px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
            <span className="block mb-2 text-violet-400">Mamba design system</span>
            <h1 className="text-5xl font-extrabold text-gray-50">{name}</h1>
            <p className="my-8">
              <span className="font-medium text-gray-50">Price : </span>{balance}
            </p>
            <div>
              {about}
            </div>
          </div>
          <div>
            <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover rounded-md  bg-gray-500" />
          </div>
        </div>
        <div className='flex justify-center'>

          <button className="btn btn-wide">Checkout</button>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;