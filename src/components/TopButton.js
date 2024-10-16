import React, { useState, useEffect, useRef } from "react";

const TopButton = () => {
    const [isTopButtonOn, setIsTopButtonOn] = useState(false);
    const topBtnRef = useRef(null);

    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        if (topBtnRef.current) {
            topBtnRef.current.onclick = handleScrollToTop;
        }

        const handleScroll = () => {
            if (document.documentElement.scrollTop > 0) {
                setIsTopButtonOn(true);
            } else {
                setIsTopButtonOn(false);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`wrap_topButton ${isTopButtonOn ? "show" : ""}`}>
            <div className="toTop" ref={topBtnRef}>
                <img src="/img/top_button.png" alt="topButton" />
            </div>
        </div>
    );
};

export default TopButton;
