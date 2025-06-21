import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Contact = () => {
  const container = useRef();
  
  useGSAP(() => {
    gsap.from(".contact-item", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "back.out(1)",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%"
      }
    });
  }, { scope: container });

  return (
    <section 
      id="contact" 
      ref={container}
      className="relative py-16 overflow-hidden bg-gray-950 w-full mt-20"
    >
      
      <div className="mx-auto px-4 sm:px-6 w-full max-w-5xl">
      
        <div className="w-full flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
          <p className="text-gray-300 text-base max-w-xl">
            Have a project in mind or want to discuss potential opportunities? 
            Reach out through email.
          </p>
        </div>

       
  

      
        <div className="mt-12 text-center">
        
          <a 
            href="mailto:malihumayon@gmail.com" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/40 transition-all hover:scale-[1.02]"
          >
            Send me a message
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;