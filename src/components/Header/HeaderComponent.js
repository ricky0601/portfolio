import React from "react";

const HeaderCompoent = () =>{
    return <header>
        <div className="wrap_header">
            <div className="logo_area">
                <a href="#Header" className="logo_style">
                    h
                    <span className="logo_shadow">h</span>
                </a>
            </div>
            <div className="menu_area">
                <ul>
                    <li>
                        <a href="#AboutMe">About me</a>
                    </li>
                    <li>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#Project">Project</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}

export default HeaderCompoent;