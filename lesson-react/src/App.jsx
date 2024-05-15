import React from "react";
import Hero from "./assets/hero-img.png";
import Logo from "./assets/logo.png";
import Pretty from "./assets/pretty.png";
import Malaya from "./assets/malaya.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";




const LandingPage = () => {

    return (
        <>
            <header>
                <nav className="nav">
                    <div className="container header-container">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a
                                    href="https://severyanchka.vercel.app/"
                                    target="_blank"
                                    className="nav__link">
                                    Works
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="https://js-blog-abdukarimov-muxriddin.vercel.app/"
                                    target="_blank"
                                    className="nav__link">
                                    Blog
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav__item">
                                <button className="toggle">
                                    <RxHamburgerMenu />
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero__row">
                            <div className="hero__left">
                                <h1 className="hero__left-title">
                                    Hi, I am John,
                                    <br />
                                    Creative Technologist
                                </h1>
                                <p className="hero__left-text">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud
                                    amet.
                                </p>
                                <button type="submit" className="hero__btn">
                                    Download Resume
                                </button>
                            </div>
                            <div className="hero__right">
                                <img
                                    src={Hero}
                                    alt=""
                                    className="hero__right-img"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="posts">
                    <div className="container">
                        <div className="posts__desc">
                            <h4 className="posts__title">Recent posts</h4>
                            <a href="#" className="posts__link">
                                View all
                            </a>
                        </div>
                        <div className="posts__row">
                            <div className="posts__card">
                                <h3>Making a design system from scratch</h3>
                                <div className="date">
                                    12 Feb 2020 <span>|</span> Design,Pattern
                                </div>
                                <p className="posts__text">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud
                                    amet.
                                </p>
                            </div>
                            <div className="posts__card">
                                <h3>Creating pixel perfect icons in Figma</h3>
                                <div className="date">
                                    12 Feb 2020 <span>|</span> Design,Pattern
                                </div>
                                <p className="posts__text">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud
                                    amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature">
                    <div className="container">
                        <h4>Featured works</h4>
                        <div className="feature__row">
                            <div className="feature__row-item">
                                <img src={Pretty} alt="Design dashboard" className="feature-img"/>
                                <div className="dashboard">
                                    <h3>Designing Dashboards</h3>
                                    <div className="dash__desc">
                                        <span>2020</span>
                                        <p>Dashboard</p>
                                    </div>
                                    <p>
                                        Amet minim mollit non deserunt ullamco
                                        est sit aliqua dolor do amet sint. Velit
                                        officia consequat duis enim velit
                                        mollit. Exercitation veniam consequat
                                        sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                            <div className="feature__row-item">
                                <img src={Malaya} alt="Design dashboard" className="feature-img"/>
                                <div className="dashboard">
                                    <h3>Vibrant Portraits of 2020</h3>
                                    <div className="dash__desc">
                                        <span>2018</span>
                                        <p>Illustration</p>
                                    </div>
                                    <p className="text">
                                        Amet minim mollit non deserunt ullamco
                                        est sit aliqua dolor do amet sint. Velit
                                        officia consequat duis enim velit
                                        mollit. Exercitation veniam consequat
                                        sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                            <div className="feature__row-item">
                                <img src={Logo} alt="Design dashboard" className="feature-img"/>
                                <div className="dashboard">
                                    <h3>36 Days of Malayalam type</h3>
                                    <div className="dash__desc">
                                        <span>2018</span>
                                        <p>Typography</p>
                                    </div>
                                    <p>
                                        Amet minim mollit non deserunt ullamco
                                        est sit aliqua dolor do amet sint. Velit
                                        officia consequat duis enim velit
                                        mollit. Exercitation veniam consequat
                                        sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="container">
                    <div className="footer__link-items">
                        <a
                            href="https://www.facebook.com/?locale=ru_RU"
                            target="_blank"
                            className="footer__link">
                            <FaSquareFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className="footer__link">
                            <FaInstagram />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="footer__link">
                            <FaTwitter />
                        </a>
                        <a
                            href="https://ru.linkedin.com/"
                            target="_blank"
                            className="footer__link">
                            <FaLinkedin />
                        </a>
                    </div>
                    <p className="footer__text">
                        Copyright & 2020 All right reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;
