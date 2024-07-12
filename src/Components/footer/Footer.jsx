import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'
import {
    FaRegEnvelope,
    FaCaretRight,
    FaFacebookF,
    FaLinkedin,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'

import { AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__grid container grid">
                <div className="footer__content">
                    <a href="/" className="footer__logo">
                        <img src={logo} alt="" className="footer__logo-img" />
                    </a>
                    <p className="footer__description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, beatae
                        aut! Qui necessitatibus repellat vero nihil, asperiores quaerat deleniti ratione
                        voluptas sed, veniam animi, adipisci at odio sint officiis vitae?
                    </p>

                    <ul className="footer__contact">
                        <li className="footer__contact-item">
                            <AiOutlinePhone className='icon' /> +91 123 456 7890
                        </li>
                        <li className="footer__contact-item">
                            <MdOutlineLocationOn className='icon' />Una, Himachal Pradesh (India)
                        </li>
                        <li className="footer__contact-item">
                            <FaRegEnvelope className='icon' /> info@example.com
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Quick Links</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#about" className="footer__link">
                            <FaCaretRight className='icon'/> About Us
                            </a>
                        </li>
                        <li>
                            <a href="#menu" className="footer__link">
                            <FaCaretRight className='icon'/> Menu
                            </a>
                        </li>
                        <li>
                            <a href="#gallery" className="footer__link">
                            <FaCaretRight className='icon'/> Gallery
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="footer__link">
                            <FaCaretRight className='icon'/> Team
                            </a>
                        </li>
                        <li>
                            <a href="#reservation" className="footer__link">
                            <FaCaretRight className='icon'/> Reservation
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Opening Hours</h3>

                    <div className="footer__opening-hour">
                        <ul className="opening__hour-list">
                            <li className="opening__hours-item">
                                <span>Monday</span>
                                <span>09AM - 06PM</span>
                            </li>
                            <li className="opening__hours-item">
                                <span>Tuseday</span>
                                <span>09AM - 06PM</span>
                            </li>
                            <li className="opening__hours-item">
                                <span>Wednesday</span>
                                <span>09AM - 06PM</span>
                            </li>
                            <li className="opening__hours-item">
                                <span>Thrusday</span>
                                <span>09AM - 06PM</span>
                            </li>
                            <li className="opening__hours-item">
                                <span>Friday</span>
                                <span>09AM - 06PM</span>
                            </li>
                            <li className="opening__hours-item">
                                <span>Saturday</span>
                                <span>09AM - 06PM</span>
                            </li>
                            <li className="opening__hours-item">
                                <span>Sunday </span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__content">
                <h3 className="footer__title">Newsletter</h3>

                <p className="footer__description">
                    Subscribe Our Newsletter To Get Latest Update And News
                </p>
                <form action="" className="subscribe__form">
                    <input type="text" placeholder='Enter Your Email' 
                    className="form__input subscribe input" />
                    <button className="btn btn--flex subscribe__btn">
                        <FaRegEnvelope/> Subscribe Now
                    </button>
                </form>

                <div className="footer__socials">
                    <h3 className="footer__social-follow">Follow Us</h3>

                    <div className="footer__social-links">
                        <a href="/" className="footer__social-link">
                            <FaFacebookF/>
                        </a>
                        <a href="/" className="footer__social-link">
                            <FaTwitter/>
                        </a>
                        <a href="/" className="footer__social-link">
                            <FaLinkedin/>
                        </a>
                        <a href="/" className="footer__social-link">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>
                </div>
            </div>

            <p className="copyright__text">
             &copy; Copyright 2023 <span>Coffero</span> All Rights Reserved. 
            </p>
        </footer>
    )
}

export default Footer