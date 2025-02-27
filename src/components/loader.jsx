import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/loader.json';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie animationData={animationData} loop={true}  style={{ width: 300, height: 300,}} />
    </div>
  );
};

export default Loader;
