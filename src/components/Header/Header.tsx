import { BsStars } from 'react-icons/bs';
import './header.scss'
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";


const Header: React.FC = () => {
    return (
        <>
            <header id="header" className="header">
                <div className="container">
                    <div className="header_brbalo">
                        <div className="header__box">
                            <h2 className="header__title">
                                <BsStars className='header_icon' />  Welcome to my Portfolio  <BsStars className='header_icon' />
                            </h2>
                            <h1 className="header_title header_title1">Frontend <span className="header_span">Developer</span></h1>
                        </div>

                        <div className="header_text">


                        </div>
                    </div>

                    <div className="header_zarifa">
                        <div className="phone">
                            <div className="screen">
                                <div className="status_bar">
                                    <span className="time">9:41</span>

                                    <div className="icons">
                                        <span>📶📡</span>
                                        <span className="battery">🔋87%</span>
                                    </div>
                                </div>

                                <div className="content">
                                    <TypeAnimation
                                        sequence={[
                                            "Hi 👋",
                                            1000,
                                            "Welcome to my Portfolio",
                                            1000,
                                            "I'm Frontend developer",
                                            1000,

                                        ]}
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="header_text_box">
                            <div className="header_last">
                                <p className="header_last_text">
                                    Click here to view my projects  <GrProjects />

                                </p>
                                <IoArrowDownCircleOutline className="header_last_icon" />
                                <a href="#about" className="btn">
                                    <p className="btn_text">
                                        About Me
                                    </p>
                                </a>

                            </div>


                            <div className="header__last">
                                <p className="header__last_text">
                                    Click to view detailed information about me <FaRegUserCircle />
                                </p>
                                <IoArrowDownCircleOutline className="header_last_icon" />
                                <a href="#skills" className="btn">
                                    <p className="btn_text">
                                        My skills
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </header >
        </ >
    );
};

export default Header;