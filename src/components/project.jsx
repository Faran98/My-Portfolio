import React, { Component } from 'react';

class Project extends Component {
    state = {  } 
    render() { 
        return (
        <div className="text-center h-auto pt-10 mx-32 pb-24 ">
           <div className="flex justify-center">
          <span className="md:text-3xl text-2xl font-bold text-purple-600 whitespace-nowrap underline-after ">
            PROJECT
          </span>
        </div>
            <div>
                <nav className='grid md:grid-cols-3 md:gap-5 grid-cols-2 gap-5 mt-10 md:p-10 md:pl-20 dark:bg-slate-700'>
                    <div className='md:w-96 md:h-96 h-9 w-9 border border-spacing-4 shadow'></div>
                    <div className='md:w-96 md:h-96 h-9 w-9 border border-spacing-4 shadow'></div>
                    <div className='md:w-96 md:h-96 h-9 w-9 border border-spacing-4 shadow'></div>
                    <div className='md:w-96 md:h-96 h-9 w-9 border border-spacing-4 shadow'></div>
                    <div className='md:w-96 md:h-96 h-9 w-9 border border-spacing-4 shadow'></div>
                    <div className='md:w-96 md:h-96 h-9 w-9 border border-spacing-4 shadow'></div>

                </nav>
            </div>
            </div>);
    }
}
 
export default Project;