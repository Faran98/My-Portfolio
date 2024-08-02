import React from 'react'
import Icons from "../common/icons";

const Footer = () => {
  return (
    <footer className='w-full h-auto bg-slate-900 p-4 text-slate-400 space-y-80 '>
        <div className='flex flex-col items-center space-y-1'>
            <div className="md:mt-5">
              <Icons />
            </div>
            <h4 className='text-xs md:text-lg font-medium font-sans '>Desgined by "Faran Khalil"  ©copyright-2024</h4>
        </div>
    </footer>
  )
}


export default Footer;
