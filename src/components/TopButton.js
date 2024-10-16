import React,{useState, useEffect} from "react";

const TopButton = () =>{
    const [isTopButtonOn, setIsTopButtonOn] = useState(false);

    const $topBtn = document.querySelector(".toTop");

    $topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });  
    }

    useEffect(() => {
        const handleScroll = () => {
        if (document.documentElement.scrollTop > 0) {
            setIsTopButtonOn(true);
        } else {
            setIsTopButtonOn(false);
        }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
        document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className={`wrap_topButton ${isTopButtonOn ? 'show' : ''}`}>
        <div className="toTop">
            <img src="/img/top_button.png" alt="topButton"></img>
        </div>
    </div>
}

export default TopButton;