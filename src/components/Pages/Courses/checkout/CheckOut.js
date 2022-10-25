import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const checkOutItem = useLoaderData();
  console.log(checkOutItem);
  const { id, name, picture, subtitle, price } = checkOutItem;

  return (
    <div className='flex justify-center dark:bg-gray-900'>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10  dark:text-gray-100">
        <h2 className="text-xl font-semibold">Check Out</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col  justify-center py-6 sm:flex-row sm:justify-between">
            <div className="flex items-center w-full space-x-2 sm:space-x-4">
              <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={picture} alt="Polaroid camera" />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between  w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
                    <p className="text-sm dark:text-gray-400">Classic</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{price}</p>
                    <p className="text-sm line-through dark:text-gray-600">30%</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-y-1 text-right">
          <br />
          <br />
          <br />
          <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to='/courses'>
            <button type="button" className="px-6 py-2 border rounded-md dark:border-red-700">Back
              <span className="">to Course</span>
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default CheckOut;