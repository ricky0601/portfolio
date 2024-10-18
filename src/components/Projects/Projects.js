import React from "react";

const Projects = () => {
    return <article id="Projects">
        <div className="wrap_title">
            <h2 className="title_style">
                Project
            </h2>
        </div>
        <div className="wrap_list">
            <div className="wrap_txt">
                <div className="title_area">
                    <h3>Portfolio</h3>
                </div>
                <div className="dura_area">
                    <p>2024.03. ~ 2024.11.</p>
                </div>
                <div className="desc_area">
                    <p>
                        <strong>React</strong> 를 활용한 포트폴리오입니다.
                        <br/>
                        기본적으로 Html, Css, Javascript를 활용해 제작했고,
                        <br/>
                        SEO를 고려한 Sementic 코드와
                        <br/>
                        웹 접근성을 고려하였습니다.
                    </p>
                </div>
                <div className="stack_area">
                    <button>Html</button>
                    <button>Css</button>
                    <button>Javascript</button>
                    <button>GSAP</button>
                    <button>Github</button>
                </div>
                <div className="link_area">
                    <a href="https://github.com/ricky0601/portfolio" target="_blank" rel="noreferrer">
                        <i>자세히 보기</i>
                    </a>
                </div>
            </div>
            <div className="wrap_img">
                <div className="img_back"></div>
                <img src="/img/Portfolio_img.png" alt="Project img"></img>
            </div>
        </div>

        <div className="wrap_list">
            <div className="wrap_txt">
                <div className="title_area">
                    <h3>Flenders</h3>
                </div>
                <div className="dura_area">
                    <p>2023.09. ~ 2024.09.</p>
                </div>
                <div className="desc_area">
                    <p>
                        <strong>React Native</strong> 를 활용한 카메라 어플입니다.
                        <br/>
                        한국공학대학교 졸업 연구로 개발을 했고,
                        <br/>
                        <strong>'저시력자들의 오프라인 쇼핑을 보조하는 AI를 활용한 어플리케이션 개발'</strong>
                        <br/>
                        이라는 주제로 개발을 하였습니다.
                        <br />
                        Google OpenAI인 Gemini를 사용하였고,
                        <br />
                        Google Cloud Platform에는 AI의 서버를 두었습니다.
                    </p>
                </div>
                <div className="stack_area">
                    <button>Node.js</button>
                    <button>Gemini</button>
                    <button>Github</button>
                    <button>Github</button>
                    <button>React Native</button>
                    <button>Google Cloud Platform</button>
                </div>
                <div className="link_area">
                    <a href="https://github.com/ricky0601/Flenders" target="_blank" rel="noreferrer">
                        <i>자세히 보기</i>
                    </a>
                </div>
            </div>
            <div className="wrap_img">
                <div className="img_back"></div>
                <img src="/img/Flenders_img.png" alt="Project img"></img>
            </div>
        </div>
    </article>
}

export default Projects;