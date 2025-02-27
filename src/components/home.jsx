import React, { Component } from "react";
import Icons from "../common/icons";
import Avatar from '../assets/images/Avatar.png';
import Embreld from '../assets/images/Embreld.png';
import About from "./about";
import Reveal from "./reveal.tsx";
import Skills from "./skills";
import Project from "./project";
import Contact  from "./contact";
import Resume from "../assets/faran_khalil_Resume.pdf";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentParagraph: 0,
      displayText: '',
      isErasing: false,
    };
  }

  paragraphs = [
    "Full Stack Developer.",
    "MERN Stack Developer.",
  ];

  componentDidMount() {
    this.showParagraph();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
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
        this.timeout = setTimeout(this.eraseParagraph, 1000);
      }
    }, 100);
  }

  eraseParagraph = () => {
    let index = this.state.displayText.length;
    this.setState({ isErasing: true });
    this.interval = setInterval(() => {
      if (index > 0) {
        this.setState({ displayText: this.state.displayText.substring(0, index - 1) });
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
    const { darkMode, setDarkMode } = this.props;

    return (
      <div>
        <div className="h-auto">
          <div className="md:flex items-center justify-center bg-nav-white text-nav-black border border-y-8 dark:border-black dark:bg-black dark:text-white h-auto">
            <Reveal>
              <div className="flex flex-col items-center justify-center md:ml-64 mt-4 md:mb-52 md:mt-24 md:mr-28">
                <img src={Embreld} className="md:h-32 md:mb-4 h-16" alt="Embreld Laptop" />
                <h1 className="md:text-5xl font-Oswald text-2xl font-bold text-nav-black dark:text-white flex">
                  <span> I'm </span>
                  <span className="text-custom-green md:ml-6 ml-2">Faran Khalil</span>
                </h1>
                <div className="md:mt-4 text-xl font-mono typewriter text-nav-black dark:text-white">
                  {displayText} <span className="caret">|</span>
                </div>
                <div className="md:mt-5 mt-3 flex flex-row md:gap-8 gap-4">
                  <div className="mt-1.5">
                    <a 
                      href={Resume} 
                      className="hover:bg-custom-green md:w-24 w-16 rounded-sm border-2 dark:hover:text-white dark:border-custom-green border-black hover:border-black bg-transition-all md:px-5 px-3 md:py-2 py-1 ease-in-out dark:text-custom-green text-black" 
                      download="Faran_Khalil_Resume.pdf"

                    >
                      RESUME
                    </a>
                  </div>
                  <Icons />
                  <button 
  onClick={() => setDarkMode(!darkMode)} 
  className="text-base borde px-2 py-1 dark:text-black text-white bg-custom-green black hover:text-white border-custom-green hover:border-black rounded-full "
>
  {darkMode ? "🌞" : "🌙"}
</button>
                </div>
              </div>
            </Reveal>
            <div className="flex items-center justify-center md:w-2/5 md:ml-30 md:mb-24">
              <Reveal>
                <img src={Avatar} className="item-center justify-center md:mr-64 md:h-2/5 object-contain" alt="Avatar" />
              </Reveal>
            </div>
          </div>
        </div>

        <About />
        <div className="bg-gray-900"><Skills /></div>
        <div className="dark:bg-slate-800"><Project /></div>
        <div className="dark:bg-slate-800"><Contact /></div>
      </div>
    );
  }
}

export default Home;
