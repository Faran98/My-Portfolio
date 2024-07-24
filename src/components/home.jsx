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
                this.timeout = setTimeout(this.eraseParagraph, 1000); // Display the paragraph for 3 seconds
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
                <div className="md:flex  items-center justify-center bg-nav-white text-nav-black darkMode:bg-nav-black darkMode:text-white">
                    <div className="flex flex-col  items-center justify-center md:ml-72">
                        <img
                            src="/images/Whitelaptop.png"
                            className="md:h-36 md:mb-4 h-32 mt-20"
                            alt="White Laptop"
                        />
                        <h1 className=" text-5xl font-bold  font-mono">Faran Khalil</h1>
                        <div className=" md:mt-2 text-2xl font- font-mono typewriter">
                            {displayText}
                            <span className="caret">|</span>
                        </div>
                        <div className="mt-5">
                        <Icons/>
                        </div>
                        <div>
                            <DarkModeToggle />
                        </div>
                        
                    </div>
                    
                    <div className="md:size-2/5 md:ml-32">
                        <img
                            src="/images/Avatar.png"
                            className="item-center justify-center ms:h-3/5 ms:w-80"
                            alt="Avatar"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
