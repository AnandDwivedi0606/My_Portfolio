import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="main-container">
                    <div className="main-footer__upper">
                        <div className="main-footer__row main-footer__row-1">
                            <h2 className="heading heading-sm main-footer__heading-sm">
                                <span>Social</span>
                            </h2>
                            <div className="main-footer__social-cont">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/anand-dwivedi0606"
                                >
                                    <img
                                        className="main-footer__icon"
                                        src="./assets/png/linkedin-ico.png"
                                        alt="Anand Dwivedi Linkedin Profile"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/AnandDwivedi0606"
                                >
                                    <img
                                        className="main-footer__icon"
                                        src="./assets/png/github-ico.png"
                                        alt="Anand Dwivedi Github Profile"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://twitter.com/ananddwivedi061"
                                >
                                    <img
                                        className="main-footer__icon"
                                        src="./assets/png/twitter-ico.png"
                                        alt="Anand Dwivedi Twitter Profile"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.instagram.com/anand_dwivedi_0606/"
                                >
                                    <img
                                        className="main-footer__icon"
                                        src="./assets/png/insta-ico.png"
                                        alt="Anand Dwivedi Instagram Profile"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="main-footer__row main-footer__row-2">
                            <h2 className="heading heading-sm text-lt">Anand Dwivedi</h2>
                            <p className="main-footer__short-desc">
                                A Frontend focused Web Developer building the Frontend of
                                Websites and Web Applications that leads to the success of the
                                overall product
                            </p>
                        </div>
                    </div>

                    {/*  If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :)  */}
                    <div className="main-footer__lower">
                        &copy; Copyright
                        <script>document.write(new Date().getFullYear());</script>. Made by
                        <Link rel="noreferrer" target="_blank" to="/">Anand Dwivedi</Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
