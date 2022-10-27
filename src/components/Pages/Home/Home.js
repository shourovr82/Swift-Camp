import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import HeroArea from './HeroArea';
import './Home.css'

const Home = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className=' flex items-center justify-center pt-28'>
      <div className={theme === 'light' ? 'home-background uppercase text-center text-white font-extrabold' : 'home-background-dark uppercase text-center text-white font-extrabold'}>
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
        </div>
      </div>


    </div>
  );
};

export default Home;