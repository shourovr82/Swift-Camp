import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Faq = () => {
  const { theme } = useContext(AuthContext)
  return (

    <div>
      <div className='flex justify-center py-10'>
        <h2 className={theme === 'light' ? 'text-black text-center font-bold text-3xl uppercase' : 'text-white font-bold text-3xl uppercase text-center'}>frequently asked questions </h2>
      </div>


      <div className='flex justify-center  md:px-10 pt-10 w-11/12 mx-auto'>

        <section>


          <div tabIndex={0} className="collapse mb-3 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              What’s the difference between AI and machine learning?
            </div>
            <div className="collapse-content">
              <p>Machine learning and artificial intelligence (AI) are closely connected but are not the same. With AI, a computer mimics learning and problem-solving to make decisions. Machine learning is how a computer uses statistics and data to learn to mimic human cognitive functions. Machine learning is a part of AI.⁶</p>
            </div>
          </div>

          <div tabIndex={1} className="collapse mb-3 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              How long does it take to learn machine learning online?
            </div>
            <div className="collapse-content">
              <p>It depends on the machine learning online course. Some courses are self-paced and require a few weeks to complete; others require a couple of months.</p>
            </div>
          </div>

          <div tabIndex={2} className="collapse mb-3 collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              Is machine learning related to data science?
            </div>
            <div className="collapse-content">
              <p>Machine learning is a part of data science. Machine learning allows individuals to extract insights from data and build predictive models.</p>
            </div>
          </div>

          <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              Do you need to know Python for machine learning?
            </div>
            <div className="collapse-content">
              <p>Python is one of the most common programming languages, so it can be important to become familiar with it. Other languages include R, Java and C++.</p>
            </div>
          </div>
        </section >
      </div >
    </div>
  );
};

export default Faq;