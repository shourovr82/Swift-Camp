import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Blog = () => {
  const { theme } = useContext(AuthContext);
  return (

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        <h2 className={theme === 'light' ? 'text-black        max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto' : 'max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto'}>



          Most Common Interview questions for Web Developer
        </h2>

      </div>
      <div className="max-w-lg  p-4 rounded-lg bg-[#f3ebf6] shadow-lg space-y-3 sm:mx-auto lg:max-w-xl">


        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-105">

          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-800 font-bold mb-3">
              What is `CORS`?
            </p>
            <p className="text-gray-800">
              CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
            </p>
          </div>
        </div>

        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-105">

          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-800 font-bold mb-3">
              Why are you using `firebase`? What other options do you have to implement authentication?
            </p>
            <p className="text-gray-800">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
            </p>
          </div>
        </div>

        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-105">

          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-800 font-bold mb-3">
              How does the private route work?
            </p>
            <p className="text-gray-800">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
            </p>
          </div>
        </div>
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-105">

          <div className="mr-2">
            <svg
              className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-800 font-bold mb-3">
              What is Node? How does Node work?
            </p>
            <p className="text-gray-800">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>


      </div>
    </div >
  );
};

export default Blog;