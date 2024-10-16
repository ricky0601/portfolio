import React from "react";


const AboutMe = () =>{
    return <article id="AboutMe">
        <div className="wrap_title">
            <h1 className="Main_title">FrontEnd Develper,</h1>
            <p className="Sub_title">한 동 건</p>
            <div className="wrap_contect">
                <p className="address">
                    <a href="https://github.com/ricky0601" target="_blank" rel="noreferrer">
                        <img src="/img/github_icon.png" alt="Github Logo"></img>
                        github.com/ricky0601
                    </a>
                </p>
                <p className="address">
                    <a href="https://velog.io/@ricky0601/posts" target="_blank" rel="noreferrer">
                        <img src="/img/velog_icon.png" alt="Velog Logo"></img>
                        velog.com/ricky0601
                    </a>
                </p>
            </div>
        </div>
        <div className="wrap_desc">
            <p>
                안녕하세요. 저는 프론트엔드를 깊이 있게 다져나가고 있는
                <br />
                주니어 개발자 한동건입니다.
                <br />
                백엔드에도 관심을 가지며, 분야를 가리지 않고
                <br />
                개발에 대한 관심사를 폭넓게 확장하고 있습니다.
                <br />
                <br />
                "시작을 두려워하면, 절반도 못한다."
                <br />
                <br />
                이 문장은 항상 제 자신에게 되새기며
                <br />
                더 넓은 시야와 새로운 배움을 추구하는 원동력이 되었습니다. 
                <br />
                이러한 자세로 여러 활동과 협업 경험을 쌓아왔고,
                <br />
                매번 새로운 계획과 도전이
                <br />
                저를 성장시키는 큰 자극제가 되어주었습니다.
                <br />
                <br />
                스스로에게 끊임없이 새로운 과제를 부여하며,
                <br />
                매번 더 나은 개발자가 되기 위해 노력하고 있습니다.
                <br />
                앞으로도 배우는 것을 두려워하지 않고,
                <br />
                더욱 넓고 깊게 기술을 탐구하며 나아가겠습니다.
            </p>
        </div>
        <div className="scroll-indicator"></div>
    </article>
}

export default AboutMe;