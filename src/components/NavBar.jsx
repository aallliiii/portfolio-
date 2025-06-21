import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#hero" className="logo">Muhammad Ali</a>

          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
              <li>
              <button
                    onClick={() => window.open("https://huggingface.co/spaces/aallliiii/career-bot", "_blank")}
                    className="chat-btn"
                    style={{cursor: "pointer"}}
                  >
                    Chat with my AI
                  </button>

              </li>
            </ul>
          </nav>
        </div>
      </header>

      
    </>
  );
};

export default NavBar;
