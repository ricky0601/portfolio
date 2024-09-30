import React, { useEffect, useState } from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 900, 
  easing: 'ease-in-out', 
  once: true, 
});

const Header = () => {
  const [isTopBarDown, setIsTopBarDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 0) {
        setIsTopBarDown(true);
      } else {
        setIsTopBarDown(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const buttonMenu = () => {
    setIsButtonOpen(!isButtonOpen);
  }

  return (
    <div className={`Header ${isTopBarDown ? 'top-bar-down' : ''} ${isButtonOpen ? 'buttonOn' : ''}`}>
      <div className="Header_main">
        <div data-aos="fade-right" className="logoBar">DongGeon</div>
        <div className={`menuBar ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li data-aos="fade-right"><a href="#PROFILE">PROFILE</a></li>
            <li data-aos="fade-right"><a href="#PROJECT">PROJECT</a></li>
            <li data-aos="fade-right"><a href="#SKILLS">SKILLS</a></li>
            <li data-aos="fade-right">
                <button class="btn">
                    <a href='https://github.com/ricky0601' target='_blank' rel="noreferrer noopener">
                    <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                    </a>
                </button>
            </li>
          </ul>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
        <div className='close_button' onClick={buttonMenu}>닫기 버튼</div>
      </div>
    </div>
  );
};

export default Header;
