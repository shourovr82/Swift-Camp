import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Courses.css'


const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  const { name, about, company, picture, registered } = courseDetails;

  return (
    <div className='details'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="p-6 mx-10 text-gray-100 ">
        <div className="container grid gap-6 mx-auto text-center items-center justify-between lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
            <span className="block mb-2 text-violet-400">Mamba design system</span>
            <h1 className="text-5xl font-extrabold text-gray-50">{name}</h1>
            <p className="my-8">
              <span className="font-medium text-gray-50">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste alias quae voluptatibus cum veritatis fugiat sapiente natus harum maiores at, atque non quidem nobis expedita minima nulla necessitatibus hic voluptates a facere saepe nam ducimus veniam! Sequi voluptates, in incidunt facilis quasi, veniam, aut modi dignissimos cumque autem non rerum.
            </div>
          </div>
          <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover rounded-md xl:col-span-3 bg-gray-500" />
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;