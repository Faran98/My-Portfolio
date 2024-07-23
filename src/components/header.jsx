import React, { Component } from 'react';

class Header extends Component {
    state = {  } 
    render() { 
        return( 
       <nav class="bg-custom-gradient fixed w-full top-0 left-0 p-5 px-40">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-nav-color text-2xl font-bold ">
            Faran Khalil
          </a>
          <ul className="flex space-x-12">
            <li>
              <a href="/" class="text-nav-color hover:text-gray  hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-nav-color hover:text-gray-200 hover:underline">
                About me
              </a>
            </li>
            <li>
              <a href="/Skill" className="text-nav-color hover:text-gray-200 hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="/services" className="text-nav-color hover:text-gray-200 hover:underline">
                Resume
              </a>
            </li>
            <li>
              <a href="/contact" className="text-nav-color hover:text-gray-200 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}
 
export default Header;