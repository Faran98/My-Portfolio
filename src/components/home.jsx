import React, { Component } from "react";
import Icons from "../common/icons";
import DarkModeToggle from "./darkModeToggle";
import Avatar from '../assets/images/Avatar.png';
import purplelaptop from '../assets/images/purplelaptop.png';
import About from "./about";
import Skills from "./skills";
import Project from "./project";
import Contact  from "./contact";

class Home extends Component {
  state = {
    currentParagraph: 0,
    displayText: '',
    isErasing: false,
  }

  paragraphs = [
    "Full Stack Developer.",
    "MERN Stack Developer.",
  ];

  componentDidMount() {
    this.showParagraph();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  showParagraph = () => {
    const { currentParagraph } = this.state;
    const fullText = this.paragraphs[currentParagraph];
    let index = 0;
    this.interval = setInterval(() => {
      if (index < fullText.length) {
        this.setState({ displayText: fullText.substring(0, index + 1) });
        index++;
      } else {
        clearInterval(this.interval);
        this.timeout = setTimeout(this.eraseParagraph, 1000); // Display the paragraph for 1 second
      }
    }, 100);
  }

  eraseParagraph = () => {
    const { displayText } = this.state;
    let index = displayText.length;
    this.setState({ isErasing: true });
    this.interval = setInterval(() => {
      if (index > 0) {
        this.setState({ displayText: displayText.substring(0, index - 1) });
        index--;
      } else {
        clearInterval(this.interval);
        this.setState(prevState => ({
          currentParagraph: (prevState.currentParagraph + 1) % this.paragraphs.length,
          isErasing: false
        }), this.showParagraph);
      }
    }, 100);
  }

  render() {
    const { displayText } = this.state;
    return (
        <div>
      <div className="h-auto">
        <div className="md:flex items-center justify-center bg-nav-white text-nav-black border border-y-8 dark:border-black dark:bg-black dark:text-white h-auto">
          <div className="flex flex-col items-center justify-center md:ml-64 mt-4 md:mb-52 md:mt-24 md:mr-28">
            <img
              src={purplelaptop}
              className="md:h-36 md:mb-4 h-32"
              alt="White Laptop"
            />
            <h1 className="md:text-5xl text-3xl font-bold font-mono text-nav-black dark:text-white flex"><h1 className=""> I'am </h1><span className="text-purple-600 ml-6 ">Faran Khalil</span></h1>
            <div className="md:mt-4 text-2xl font-mono typewriter text-nav-black dark:text-white">
              {displayText}
              <span className="caret">|</span>
            </div>
            <div className="md:mt-5">
              <Icons />
            </div>
            <div>
              <DarkModeToggle />

            </div>
          </div>

          <div className="flex items-center justify-center md:w-2/5 md:ml-30 md:mb-24 ">
          <img
              src={Avatar} //
              className="item-center justify-center md:mr-64 md:h-2/5 object-contain"
              alt="Avatar"
            />
          </div>
        </div>
       
      </div>
      <div>
      <About />
    </div>
    <div className="bg-gray-900">
              <Skills />
            </div>
            <div className="dark:bg-slate-800">
              <Project />
            </div>
            <div className="dark:bg-slate-800">
              <Contact />
            </div>

    </div>
    
    );
  }
}

export default Home;
