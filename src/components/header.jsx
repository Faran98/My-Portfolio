import React, { Component } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

class Header extends Component {
    state = { 
      navlink: [
      {name:'Home',link:'/'},
      {name:'About me', link:'/'},
      {name:'Skills', link:'/'},
      {name:'Resume',link:'/'},
      {name:'Contact',link:'/'},

     ],
       open: false
    } 
    toggleMenu = () => {
      this.setState(prevState => ({ open: !prevState.open }));
    };
  render() { 
    return (
      <div className='shadow-md w-full top-0 left-0'>
        <div className='bg-custom-gradient py-4'>
          <nav className='flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-32 '>
            <a href="/" className=" text-nav-color text-2xl font-bold transition ease-in-out delay-150 duration-300 hover:text-nav-black">
              Faran Khalil
            </a>
            <div onClick={this.toggleMenu} className='absolute right-8 top-6 md:hidden'>
            {this.state.open ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </div >
            <ul className={`flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 ${this.state.open ? 'block' : 'hidden'} md:flex`}>
  {this.state.navlink.map(nav => (
    <li key={nav.name} className='mb-4 md:mb-0'>
      <a href={nav.link} className='text-xl text-nav-color transition ease-in-out delay-150 duration-200 hover:text-nav-black'>
        {nav.name}
      </a>
    </li>
  ))}
</ul>
          </nav>
        </div>
      </div>































      //  <nav class="bg-custom-gradient fixed w-full top-0 left-0 p-5 px-40">
      //   <div className="container mx-auto flex justify-between items-center">
      //     <a href="/" className="text-nav-color text-2xl font-bold ">
      //       Faran Khalil
      //     </a>
      //     <ul className="flex space-x-12">
      //       <li>
      //         <a href="/" class="text-nav-color hover:text-gray  hover:underline">
      //           Home
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/about" className="text-nav-color hover:text-gray-200 hover:underline">
      //           About me
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/Skill" className="text-nav-color hover:text-gray-200 hover:underline">
      //           Skills
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/services" className="text-nav-color hover:text-gray-200 hover:underline">
      //           Resume
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/contact" className="text-nav-color hover:text-gray-200 hover:underline">
      //           Contact
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }

}
 
export default Header;