import React, { useState } from 'react';

const Main = () => {
    const [isHovered, setIsHovered] = useState(false);

    return <div className="Main">
        <session className="Main_Header">
                <span
                    className={`Main_Header_span ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >DongGeon's <br/>Portfolio</span>
        </session>
        <h2 id="portfolio_list">
            <span className='hidden'>자기소개 영역</span>
        </h2>
        <session>로고 영역</session>
        <h2 id="portfolio_list">
            <span className='hidden'>포트폴리오 목록</span>
        </h2>
        <session className="Main_Main">
            <div className="Main_Main_wrap">
                <span className='session_title'>
                    <strong>
                        PROJECT
                    </strong>
                </span>
                <article className='Project_list'>
                    <div className='Project_thumb_wrap'>
                        <a className='Project_thumb' href='/'></a>
                    </div>
                    <div className='Project_info_wrap'>
                        <div>프로젝트 이름</div>
                        <div>프로젝트 기간</div>
                        <div>사용한 기술</div>
                    </div>
                </article>
                <article className='Project_list'>
                    <div className='Project_thumb_wrap'>
                        <a className='Project_thumb' href='/'></a>
                    </div>
                    <div className='Project_info_wrap'>
                        <div>프로젝트 이름</div>
                        <div>프로젝트 기간</div>
                        <div>사용한 기술</div>
                    </div>
                </article>
                <article className='Project_list'>
                    <div className='Project_thumb_wrap'>
                        <a className='Project_thumb' href='/'></a>
                    </div>
                    <div className='Project_info_wrap'>
                        <div>프로젝트 이름</div>
                        <div>프로젝트 기간</div>
                        <div>사용한 기술</div>
                    </div>
                </article>
            </div>
        </session>
        <session>로고 영역</session>
    </div>
}

export default Main;