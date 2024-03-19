import React, { useEffect, useState } from "react";

const Header = () => {
    const [isTopBarDown, setIsTopBarDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (document.documentElement.scrollTop > 0) {
                setIsTopBarDown(true);
            } else {
                setIsTopBarDown(false);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`Header ${isTopBarDown ? "top-bar-down" : ""}`}>
            <div className="Header_main">
                <div className="logoBar">DongGeon</div>
                <div className="menuBar">
                    <ul>
                        <a href="#session_title2"><li>PROFILE</li></a>
                        <a href="#session_title"><li>PROJECT</li></a>
                        <li>3번 메뉴</li>
                        <li>4번 메뉴</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
