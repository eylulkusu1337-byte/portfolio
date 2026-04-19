import "./footer.scss";
import { IoCallOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <h1 className="title">Contact Me</h1>
            <div className="contact_container">
                <div className="left-shape">
                    <div className="circle"></div>
                </div>
                <div className="contact-overlay">
                    <div className="contact-item">     <a href="tel:+998901234567" className="contact-item">
                        Contact Me <IoCallOutline />
                    </a></div>
                    <div className="contact-item">  <a href="https://t.me/yourtelegram" target="_blank" className="contact-item">
                        telegram <FaTelegram />
                    </a></div>
                    <div className="contact-item">   <a href="https://instagram.com/yourinstagram" target="_blank" className="contact-item">
                        instagram <FaInstagram />
                    </a></div>
                </div>
                <div className="form-box">
                    <label>Name :</label>
                    <input type="text" placeholder="Enter your name here..." />
                    <label>Email :</label>
                    <input type="email" placeholder="Enter your email here..." />
                    <label>Message...</label>
                    <textarea placeholder="Enter the message Here..."></textarea>
                </div>

            </div>


            <div className="mini-footer">
                Designed & Developed by Zarifa © 2026
            </div>

        </section>
    );
};

export default ContactSection;