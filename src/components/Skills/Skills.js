import React from "react";

const singleItems = [
    {
        title : '/img/html5.png'
    },
    {
        title : '/img/css.png'
    },
    {
        title : '/img/js.png'
    },
    {
        title : '/img/jsp.png'
    },
    {
        title : '/img/react.png'
    },
    {
        title : '/img/node.png'
    },
    {
        title : '/img/spring.png'
    },
    {
        title : '/img/java.png'
    },
]

const doubleItems = [
    {
        title : '/img/jQuery.png'
    },
    {
        title : '/img/RN.png'
    },
    {
        title : '/img/MySQL.png'
    },
    {
        title : '/img/Docker.png'
    },
]

const Skills = () => {
    return <article id="Skills">
        <div className="wrap_title">
            <h2 className="title_style">
                Skills
            </h2>
        </div>
        <div className="wrap_stacks">
            {singleItems.map((it) => (
                <div className="single_stacks" key={it.title}>
                    <img src={it.title} alt="skill" />
                </div>
            ))}
            
            {doubleItems.map((it) => (
                <div className="double_stacks" key={it.title}>
                    <img src={it.title} alt="skill" />
                </div>
            ))}
        </div>
    </article>
}

export default Skills;