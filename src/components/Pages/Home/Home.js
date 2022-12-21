import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Testimonial from '../Testimonial/Testimonial';
import HeroArea from './HeroArea';
import './Home.css'

const Home = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className=' flex items-center justify-center  '>

      <div className={theme === 'light' ? 'home-background  uppercase text-center text-white font-extrabold' : 'home-background-dark uppercase text-center text-white font-extrabold'}>


        <HeroArea></HeroArea>
        <div>

          <section className="p-4 lg:p-8 dark:bg-slate-300 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
              <div className="flex flex-col overflow-hidden bg-white shadow-xl rounded-md  lg:flex-row-reverse">
                <img src="https://i.ibb.co/k3MxRqP/4-B786524-9822-47-E5-BE20-77-F41-AADF63-B.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 ">
                  <span className="text-xs uppercase dark:text-black">Join, it's free</span>
                  <h3 className="text-red-800 text-3xl mt-3 font-bold">Cloud skills are in higher demand than any other area of technology</h3>
                  <p className="my-6 dark:text-black font-semibold">Train for high growth cloud jobs with the Google Cloud Computing Foundations Professional Certificate program</p>
                  <button type="button" className="self-start">Action</button>
                </div>
              </div>

            </div>
          </section>

          <section className="p-6 bg-gray-800 text-gray-100">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                <p className="text-sm sm:text-base">Clients</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                <p className="text-sm sm:text-base">Followers on social media</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                <p className="text-sm sm:text-base">Published books</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
                <p className="text-sm sm:text-base">TED talks</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                <p className="text-sm sm:text-base">Years of experience</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                <p className="text-sm sm:text-base">Workshops</p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <Testimonial></Testimonial>
        </div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

      </div>



    </div>
  );
};

export default Home;