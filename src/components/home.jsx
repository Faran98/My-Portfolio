import React, { Component } from "react";
import Icons from "../common/icons";
import DarkModeToggle from "./darkModeToggle";

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
        
      <div className="h-screen">
        <div className="md:flex items-center justify-center bg-nav-white text-nav-black dark:bg-black dark:text-white h-lvh">
          <div className="flex flex-col items-center justify-center md:ml-72 mt-36 md:mb-52">
            <img
              src="/images/Whitelaptop.png"
              className="md:h-36 md:mb-4 h-32"
              alt="White Laptop"
            />
            <h1 className="text-5xl font-bold font-mono text-nav-black dark:text-white">Faran Khalil</h1>
            <div className="md:mt-2 text-2xl font-mono typewriter text-nav-black dark:text-white">
              {displayText}
              <span className="caret">|</span>
            </div>
            <div className="mt-5">
              <Icons />
            </div>
            <div>
              <DarkModeToggle />
            </div>
          </div>

          <div className="md:w-2/5 md:ml-32 md:mb-24">
            <img
              src="/images/Avatar.png"
              className="item-center justify-center md:h-3/5 "
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
