import React from 'react';

const Contact = () => {
  return (
    <div className="h-auto pb-10">
      <div className="flex justify-center mb-4 ">
        <span className="md:text-3xl text-2xl font-bold text-purple-600 whitespace-nowrap underline-after">
          CONTACT ME
        </span>
      </div>
      <div className='w-full md:w-1/2 p-6 md:mx-24'>
        <form
          className='flex flex-col'
          action="https://formsubmit.co/mirzazain269@gmail.com"
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
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://mirzazain.vercel.app/thankyou/" />
          <button className='w-full h-14 bg-purple-600 text-white font-bold mt-2'>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
