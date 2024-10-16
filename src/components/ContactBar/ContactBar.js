import React from "react";

const ContactBar = () => {
    return <div id="ContactBar">
        <div className="bar_background">
            <div className="wrap_icon">
                <div className="icon_item">
                    <a href="https://github.com/ricky0601" target="_blank" rel="noreferrer">
                        <img src="/img/github_icon.png" alt="Github" className="githubIcon"></img>
                    </a>
                </div>
                <div className="icon_item">
                    <a href="mailto:movegun0601@gmail.com" target="_blank" rel="noreferrer">
                        <img src="/img/mail_icon.png" alt="Send Mail"></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default ContactBar;