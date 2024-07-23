import React, { Component } from "react";

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
        const { displayText } = this.state; // Access displayText from state
        return (
            <div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center ml-32">
                        <img
                            src="/images/Whitelaptop.png"
                            className="h-36 mb-4"
                            alt="White Laptop"
                        />
                        <h1 className=" text-5xl font-bold  font-mono">Faran Khalil</h1>
                        <div className=" mt-6 text-2xl font- font-mono typewriter">
                            {displayText}
                            <span className="caret">|</span>
                        </div>
                    </div>
                    <div className="size-2/5 ml-32">
                        <img
                            src="/images/Avatar.jpg"
                            alt="Avatar"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
