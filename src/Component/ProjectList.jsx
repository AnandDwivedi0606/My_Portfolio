import React from 'react'

export default function ProjectList(props) {
    return (
        <>
            <h1 className="projects__row-content-title">PROJECT {props.no}</h1>
            <div className="projects__row">
                <div className="projects__row-img-cont">
                    <img
                        src={props.img}
                        alt="Software Screenshot"
                        className="projects__row-img"
                        loading="lazy"
                    />
                </div>
                <div className="projects__row-content">
                    <h2 className="projects__row-content-title">{props.title}</h2>
                    <p className="projects__row-content-desc">{props.des}</p>
                    <a
                        className="btn btn--med btn--theme dynamicBgClr"
                        href={props.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Case Study
                    </a>
                </div>
            </div>
        </>
    )
}
