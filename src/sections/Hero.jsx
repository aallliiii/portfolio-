import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 >
              Evolving
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Intelligent Systems</h1>
              <h1>that Solve Real Problems</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I’m Muhammad Ali, an AI engineer and data scientist crafting agentic systems <br /> 
            and intelligent solutions powered by data, models, and code.
            </p>

            <div className="flex flex-row gap-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
  <Button
    text="Projects"
    className="md:w-80 md:h-16 w-60 h-12"
    id="counter"
  />

  <a
    href="https://huggingface.co/spaces/aallliiii/career-bot"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group inline-flex items-center justify-center md:w-80 w-60 md:h-16 h-12 px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/30"
  >
    <span className="absolute top-0 right-0 inline-block w-4 h-4 mt-1 mr-1 transition-all duration-500 transform bg-white rounded-full group-hover:-mt-1 group-hover:-mr-1 group-hover:w-64 group-hover:h-64 group-hover:bg-cyan-200/20 opacity-10 group-hover:opacity-50"></span>
    
    <span className="relative flex items-center justify-center w-full h-full gap-2">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <span className="text-lg font-semibold">Chat with my AI</span>
    </span>

    <span className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-bottom-right"></span>
  </a>
</div>

            </div>
          </div>
        </header>

        <figure className="relative w-full h-full">
  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" />
  
  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
</figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
