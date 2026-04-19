import "./about.scss";
import about from "../../assets/img/about.png";
import { IoCallOutline } from "react-icons/io5";
const About = () => {
    return (
        <>
            <div id="about" className="about ">
                <div className="container">
                    <div className="about_box">
                        <h1 className="about_title">About Me</h1>

                        <div className="about_text_box">
                            <img src={about} alt="" />
                            <div className="about__text">
                                <p className="about_text">
                                    Hi 👋 My name is Zarifa, and I am a Frontend Developer who turns ideas into beautiful and interactive web interfaces. I started my journey at ProWeb IT Academy, where I gained a strong foundation in modern frontend development. During this process, I built experience working with technologies such as HTML, CSS, JavaScript, and React, and I further improved myself by working on real projects.
                                    <br /> <br />
                                    I enjoy working in a team, sharing ideas, and creating new and creative concepts together. For me, every project is not just code, but an opportunity to create a user-friendly and aesthetic experience. By combining design and functionality, I try to turn simple ideas into lively and engaging interfaces.
                                    <br /> <br />
                                    Additionally, I am always eager to learn new things and improve myself continuously. Following trends and updates in the frontend field, trying new technologies, and developing myself into a professional developer are my main goals. For me, writing code is not just work — it is creativity, growth, and an art of creating beautiful things.
                                </p>
                                <a href="tel:+998901234567" className="btn">
                                    Call Me <IoCallOutline />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About