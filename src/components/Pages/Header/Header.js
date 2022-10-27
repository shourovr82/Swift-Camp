import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const Header = () => {
  const { user, logOutHandle, toggleTheme, setTheme, theme } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleSignOut = () => {
    logOutHandle()
      .then(() => { })
      .catch(e => console.log(e))
  }

  return (

    <div className='  w-full bg-opacity- bg-red-800 py-2'>
      <div className="px-4  bg-transparent  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex text-white items-center justify-between ">

          <Link
            to="/"
            aria-label="Swift Camp"
            title="Swift Camp"
            className="top-[-30px] w-4/12 gap-3"
          >
            <div className='flex items-center'>
              <img className='w-[80px] hidden md:block' src="https://i.ibb.co/6n13tsP/image-1.png" alt="title" />
              <h1 className='font-bold'>SWIFT CAMP</h1>
            </div>
          </Link>

          {/* For  Large Devices */}

          <ul className="flex items-center hidden space-x-8 lg:flex">

            <li>
              <Link
                to="/"
                title="Home"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                title="Courses"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Courses
              </Link>
            </li>


            <li>
              <Link
                to="/blogs"
                aria-label="Courses pricing"
                title="Courses pricing"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                BLOGS
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                aria-label="Our faq"
                title="Our faq"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                FAQ
              </Link>
            </li>

            {/* dark mode light mode */}
            <li>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-white mr-3">Theme {theme}  </span>
                  <input
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                    type="checkbox" className="toggle toggle-accent bg-red-900" />
                </label>
              </div>
            </li>

          </ul>
          <ul className="flex items-center sm:hidden space-x-8 lg:flex">
            <li className='flex gap-3 items-center '>
              {
                user ?
                  <>
                    <button
                      onClick={handleSignOut}
                      className="border md:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 
                          hover:bg-red-700
                          hover:text-white
                          hover:border-[#152f308e]
                          hidden
                          hover:bg-deep-purple-accent-700 uppercase focus:shadow-outline focus:outline-none"
                      aria-label="Log Out"
                      title="Log Out"
                    >
                      Log Out
                    </button>

                    <Link to='/profile'>

                      <img
                        onMouseEnter={() => setShowProfile(true)}
                        onMouseLeave={() => setShowProfile(false)}
                        className='w-[45px] h-[45px]  border-spacing-5 border-2  rounded-3xl cursor-pointer'
                        title={user.displayName}
                        src={user.photoURL || 'https://i.ibb.co/BZt8Ky7/depositphotos-43381243-stock-illustration-male-avatar-profile-picture.webp'}

                        border="0" alt='' />
                    </Link>
                  </>
                  :
                  <Link to='/login' className="border md:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 uppercase focus:shadow-outline focus:outline-none
                      hover:bg-[#c22c25]

                      hover:border-[#00000004]
                      hidden
                      "
                    aria-label="Log In"
                    title="Log In"
                  >
                    Log in
                  </Link>

              }

              {showProfile &&
                <div className='bg-slate-300 text-black p-4 rounded-md shadow-lg shadow-slate-600 absolute top-14  w-[200px] duration-500 transition-all flex justify-center text-center'>
                  <p className='font-mono'> Name : <br />
                    <span className='font-bold uppercase'>
                      {user?.displayName ? user.displayName : ' No Name found'}
                    </span>
                  </p>
                </div>
              }






            </li>

          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 bg-slate-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>


            {/* phone */}

            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 phone-menu border rounded shadow-sm  bg-red-900 text-white ">
                  <div className="flex items-center justify-between mb-4 ">
                    <div className=''>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >

                        <span className="ml-2 text-xl font-bold tracking-wide text-white border px-4 py-3 rounded-md uppercase">
                          Swift Camp
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 bg-slate-200  transition duration-200 rounded hover:bg-gray-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-red-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-10 text-center text-white">
                      <li>
                        <Link
                          to="/"
                          title="Home"
                          className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          title="Courses"
                          className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>


                      <li>
                        <Link
                          to="/blogs"
                          aria-label="Courses pricing"
                          title="Courses pricing"
                          className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          BLOGS
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/faq"
                          aria-label="Our faq"
                          title="Our faq"
                          className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>

                      {/* dark mode light mode */}
                      <li>
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <span className="label-text text-white mr-3">Theme {theme}  </span>
                            <input
                              onChange={toggleTheme}
                              checked={theme === 'dark'}
                              type="checkbox" className="toggle toggle-accent bg-red-900" />
                          </label>
                        </div>
                      </li>

                      <li className='flex justify-evenly'>
                        {
                          user ?
                            <>
                              <button
                                onClick={handleSignOut}
                                className="border inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 
                                     
                          hover:text-black
                          hover:border-white
                          hover:bg-deep-purple-accent-700 uppercase focus:shadow-outline focus:outline-none"
                                aria-label="Log Out"
                                title="Log Out"
                              >
                                Log Out
                              </button>
                              <Link to='/profile'>
                                <img className='w-12 h-12 border rounded-full' src={user?.photoURL ? user.photoURL : "https://i.ibb.co/BZt8Ky7/depositphotos-43381243-stock-illustration-male-avatar-profile-picture.webp"} border="0" alt='' />
                              </Link>

                            </>
                            :
                            <Link to='/login' className="border inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 uppercase focus:shadow-outline focus:outline-none bg-[#c22c25]
                      hover:border-[#00000004]
                      "
                              onClick={() => setIsMenuOpen(false)}
                              aria-label="Log In"
                              title="Log In"
                            >
                              Log in
                            </Link>

                        }

                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div >



  );
};

export default Header;