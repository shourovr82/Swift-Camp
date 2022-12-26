import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { FaArrowRight, FaFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
// import { useReactToPrint } from 'react-to-print';
import './Courses.css'
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import ReactToPdf from 'react-to-pdf';

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { name, about, price, Instructor, picture, registered, id } = courseDetails;
  // const componetRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componetRef.current,
  //   documentTitle: 'emp-data',
  //   onAfterPrint: () => alert('Print  Success')
  // })
  const { theme } = useContext(AuthContext)
  const course = courseDetails;
  const ref = React.createRef();
  const componentRef = useRef();

  return (
    <div
      ref={ref}
      className={theme === 'light' ? 'details pb-16' : 'details-dark mb-[-30rem]'}

    // id='content'
    // ref={componetRef}
    >

      <br />
      <br />
      <br />
      <br />
      <br />
      <section


        className="p-6 mx-3 md:mx-10  text-gray-100 border-[#f7b990bb] border rounded-lg shadow-black shadow-xl">
        {/* download pdf button */}
        <div
          className='flex justify-center mb-3 '>
          <div>
            <ReactToPdf targetRef={ref} filename={name}
              x={.5} y={.5} scale={0.6}
            >
              {({ toPdf }) => (
                <button
                  onClick={toPdf}
                  className='bg-red-800 flex p-2 px-3 rounded-full shadow-xl '>
                  <FaFilePdf className='text-3xl' />
                  Download pdf
                </button>
              )}
            </ReactToPdf>
          </div>

        </div>
        <div className="container md:flex gap-6 mx-auto text-center items-center justify-between lg:grid-cols-2 xl:grid-cols-5">
          <div className="md:w-2/4 md:px-6  rounded-md  xl:col-span-2 ">
            <span className="block mb-2 text-slate-200">Course Details About : </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-50">{name}</h1>
            <div className='flex justify-center items-center gap-4'>
              <p> Instructor : {Instructor}
              </p>
              <button className="my-8 font-medium border px-4 py-3 rounded-md uppercase text-gray-50">
                <span>Price : </span>{price}
              </button>
              <p>
                Published : {registered}
              </p>
            </div>
            <div className='mb-4'>
              {about}
            </div>
          </div>
          <div>
            <img src={picture} alt="" className="object-cover rounded-md  bg-gray-500" />
          </div>
        </div>
        <div className='flex justify-center mt-6'>

          <Link to={`/checkout/${id}`}>
            <button className="btn btn-wide bg-red-800 border-0 shadow-2xl text-white">Get Premium Access   <FaArrowRight className='ml-3'></FaArrowRight> </button>
          </Link>


        </div>
      </section >
    </div >
  );
};

export default CourseDetails;