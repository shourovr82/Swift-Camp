import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
  // console.log(course);
  const { company, about, id, name, picture, registered } = course;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}!</h2>
          <p>{about ? about.slice(0, 100) : ''}</p>
          <div className="card-actions">
            <Link to={`/course/${id}`}>
              <button
                className="btn btn-primary">See Details</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;