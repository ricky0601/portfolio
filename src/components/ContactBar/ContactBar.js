import React from "react";

const ContactBar = () => {
    return <div id="ContactBar">
        <div className="bar_background">
            <div className="wrap_icon">
                <div className="icon_item tooltip-container"> 
                    <button>
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                            </div>
                        </div>
                    </button>

                    <div className="icon_item tooltip1">
                        <a href="https://github.com/ricky0601" target="_blank" rel="noreferrer">
                            <img src="/img/github_icon.png" alt="Github" className="githubIcon"></img>
                        </a>
                    </div>
                    <div className="icon_item tooltip2">
                        <a href="mailto:movegun0601@gmail.com" target="_blank" rel="noreferrer">
                            <img src="/img/mail_icon.png" alt="Send Mail"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ContactBar;