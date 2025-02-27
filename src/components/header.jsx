import React, { Component } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Resume from "../assets/faran_khalil_Resume.pdf";

class Header extends Component {
  state = {
    navlink: [
      { name: "Home", link: "/home" },
      { name: "About me", link: "/about" },
      { name: "Skills", link: "/skills" },
      { name: "Project", link: "/project" },
      { name: "Contact", link: "/contact" },
      { name: "Resume", link: Resume },
    ],
    open: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    const { darkMode, setDarkMode } = this.props;

    return (
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-md">
        <div className="dark:bg-transparent md:py-4 pt-4">
          <nav className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-44 custom:text-xl">
            <a
              href="/"
              className="flex dark:text-white text-2xl font-bold transition ease-in-out delay-150 duration-300 hover:text-nav-black"
            >
              FK<span className="text-custom-green">.</span>
            </a>
          

            <div
              onClick={this.toggleMenu}
              className="dark:text-white text-black absolute right-8 top-5 md:hidden cursor-pointer"
            >
              {this.state.open ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </div>

            <ul
              className={`text-white flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 transition-all duration-500 ease-in-out ${
                this.state.open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } md:max-h-full md:opacity-100`}
            >
              {this.state.navlink.map((nav) => (
                <li key={nav.name} className="mb-4 md:mb-0">
                  <a
                    href={nav.link}
                    className={`text-xl text-black dark:text-white transition ease-in-out delay-150 duration-200 hover:text-nav-black ${
                      nav.name === "Resume" ? "dark:text-black text-white bg-custom-green black w-24 rounded-3xl border-2 hover:text-white border-custom-green hover:border-black bg-transition-all px-2 py-1 ease-in-out" : ""
                    }`}
                    download="Faran_Khalil_Resume.pdf"
                  >
                    {nav.name}
                  </a>
          

                </li>
                
              ))}
              <button 
  onClick={() => setDarkMode(!darkMode)} 
  className="text-base borde px-2 py-1 dark:text-black text-white bg-custom-green black  hover:text-white border-custom-green hover:border-black rounded-full "
>
  {darkMode ? "🌞" : "🌙"}
</button>
            </ul>
            

          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
