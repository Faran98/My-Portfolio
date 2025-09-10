import React from "react";
import Reveal from "./reveal.tsx";
import Lottie from "lottie-react";
import contactAnimation from "../assets/animation/contact.json";

const Contact = () => {
  return (
    <div>
      <div className="h-auto pb-16 pt-10 bg-gray-50 dark:bg-black">
        {/* Heading */}
        <div className="flex justify-center mb-10">
          <Reveal>
            <span className="md:text-3xl text-xl font-bold text-custom-green whitespace-nowrap underline-after">
              CONTACT ME
            </span>
          </Reveal>
        </div>

        {/* Form & Animation Grid */}
        <div className="grid md:grid-cols-2 gap-10 w-full md:px-24 px-6 items-center">
          {/* Contact Form */}
          <div className="w-full">
            <Reveal width="100%">
              <form
                className="flex flex-col bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 space-y-4"
                action="https://formsubmit.co/farankhalilmail@gmail.com"
                method="POST"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full h-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-green"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full h-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-green"
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full h-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-green"
                />
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-green"
                />
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-custom-green text-white font-semibold text-lg hover:bg-green-600 transition duration-300 shadow-md"
                >
                  Send Message ✉️
                </button>
              </form>
            </Reveal>
          </div>

          {/* Lottie Animation */}
          <Reveal>
            <div className="flex justify-center items-center">
              <Lottie
                animationData={contactAnimation}
                loop={true}
                className="max-w-xs md:max-w-md"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
