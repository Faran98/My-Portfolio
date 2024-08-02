import React from 'react';
import Reveal from "./reveal.tsx";
import Lottie from "lottie-react";
import contactAnimation from '../assets/animation/contact.json';

const Contact = () => {
  return (
    <div className="h-auto pb-10">
      <div className="flex justify-center mb-4">
        <Reveal>
          <span className="md:text-3xl text-xl font-bold text-custom-green whitespace-nowrap underline-after">
            CONTACT ME
          </span>
        </Reveal>
      </div>
      <div className='grid md:grid-cols-2 w-ful md:mx-24' >
        <div className=' w-full md:w-full p-6 '>
          <Reveal width="100%">
            <form
              className='flex flex-col'
              action="https://formsubmit.co/farankhalilmail@gmail.com"
              method="POST"
            >
              <input
                name='name'
                type='text'
                placeholder='Name'
                className='w-full h-10 bg-gray-200 p-2 my-2'
              />
              <input
                name='email'
                type='email'
                placeholder='Email'
                className='w-full h-10 bg-gray-200 p-2 my-2'
              />
              <input
                name='subject'
                type='text'
                placeholder='Subject'
                className='w-full h-10 bg-gray-200 p-2 my-2'
              />
              <textarea
                name='message'
                placeholder='Message'
                className='w-full h-32 bg-gray-200 p-2 my-2'
              />
              {/* <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://mirzazain.vercel.app/thankyou/" /> */}
              <button className='w-full h-14 bg-purple-600 text-white font-bold mt-2'>
                Send
              </button>
            </form>
          </Reveal>
          </div>
          <Reveal>
            <div className=''>
              <Lottie animationData={contactAnimation} loop={true} />
            </div>
          </Reveal>
        
      </div>
    </div>
  );
};

export default Contact;
