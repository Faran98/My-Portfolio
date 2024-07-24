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

            <div className="w-72 items-start justify-center ">
                <nav>
                <ul className='w-72 items-start justify-center text-3xl flex flex-row space-x-5'>
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