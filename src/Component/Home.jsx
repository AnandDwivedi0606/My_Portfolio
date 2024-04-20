import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="home-hero">
                <div className="home-hero__content">
                    <h1 className="heading-primary">Hey, I'm Anand Dwivedi</h1>
                    <div className="home-hero__info">
                        <p className="text-primary">
                            A Result-Oriented Web Developer building and managing Websites and
                            Web Applications that leads to the success of the overall product
                        </p>
                    </div>
                    <div className="home-hero__cta">
                        <Link to="/project" className="btn btn--med btn--theme dynamicBgClr">Projects</Link>
                        <a href="./CV/Anand_Dwivedi Curriculumvitae.pdf" className="btn btn--med btn--theme dynamicBgClr" download>Download CV</a>
                    </div>
                </div>
                <div className="home-hero__socials">
                    <div className="home-hero__social">
                        <a
                            href="https://www.linkedin.com/in/anand-dwivedi0606"
                            className="home-hero__social-icon-link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./assets/svg/linkedin-dark.svg"
                                alt="Anand Dwivedi Linkedin Profile"
                                className="home-hero__social-icon"
                            />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a
                            href="https://github.com/AnandDwivedi0606"
                            className="home-hero__social-icon-link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./assets/svg/github-dark.svg"
                                alt="Anand Dwivedi Github Profile"
                                className="home-hero__social-icon"
                            />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a
                            href="https://twitter.com/ananddwivedi061"
                            className="home-hero__social-icon-link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./assets/svg/twitter-dark.svg"
                                alt="Anand Dwivedi Twitter Profile"
                                className="home-hero__social-icon"
                            />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a
                            href="https://www.instagram.com/anand_dwivedi_0606/"
                            className="home-hero__social-icon-link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                src="./assets/svg/instagram-dark.svg"
                                alt="Anand Dwivedi Instagram Profile"
                                className="home-hero__social-icon"
                            />
                        </a>
                    </div>
                </div>
                <div className="home-hero__mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </section>
        </>
    )
}
