import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

class Icons extends Component {
    state = { 
        icons:[
            { name: "LinkedIn", icon: faLinkedin, link:'https://www.linkedin.com/in/faran-khalil-8a4252286/' },
            { name: "Instagram", icon: faInstagramSquare, link:'https://www.instagram.com/faran.khalil/' },
            { name: "GitHub", icon: faGithub, link:'https://github.com/Faran98'},
        ],
     } 
    render() { 
        return (

            <div className="items-start justify-center ">
                <nav>
                <ul className='items-start dark:text-custom-green justify-center md:text-3xl text-2xl flex flex-row space-x-2'>
                    {this.state.icons.map(icon=>(
                        <li key={icon.name} >
                            <a href={icon.link} className='cursor-pointer'>
                                {<FontAwesomeIcon icon={icon.icon} />}
                            </a>
                        </li>))}

                </ul>
                </nav>
            </div>
        );
    }
}
export default Icons;