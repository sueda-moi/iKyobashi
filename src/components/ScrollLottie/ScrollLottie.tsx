'use client';

import Lottie from "lottie-react";
import React from "react";
import './ScrollLottie.css';
import scrollDownAnimation from './lottie/scroll-down.json'; 

const ScrollLottie = () => {
  return (
    <div className="scroll-lottie">
      <Lottie animationData={scrollDownAnimation} loop={true} />
    </div>
  );
};

export default ScrollLottie;
