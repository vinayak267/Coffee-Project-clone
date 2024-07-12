import React from 'react'
import './team.css'
import chef1 from '../../assets/images/team-1.jpg'
import chef2 from '../../assets/images/team-2.jpg'
import chef3 from '../../assets/images/team-3.jpg'
import chef4 from '../../assets/images/team-4.jpg'

import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Team = () => {
    return (
        <section className="team section" id='team'>
            <h2 className="section__title" data-title='Chefs'>
                Meet Our Experts
            </h2>
                <div className="team__grid grid container">
                    <div className="team__item">
                        <img src={chef1} alt="" className="team__img" />

                        <div className="team__data">
                            <h3 className="team__title">Meenu</h3>
                            <p className="team__job"> Senior Chef</p>
                        </div>

                        <div className="team__socials">
                            <a href="/" className="team__social-link">
                                <FaFacebookF/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaTwitter/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaLinkedin/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaYoutube/>
                            </a>
                        </div>
                    </div>
                    <div className="team__item">
                        <img src={chef2} alt="" className="team__img" />

                        <div className="team__data">
                            <h3 className="team__title">Sanjiv Smith</h3>
                            <p className="team__job"> Senior Chef</p>
                        </div>

                        <div className="team__socials">
                            <a href="/" className="team__social-link">
                                <FaFacebookF/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaTwitter/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaLinkedin/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaYoutube/>
                            </a>
                        </div>
                    </div>
                    <div className="team__item">
                        <img src={chef3} alt="" className="team__img" />

                        <div className="team__data">
                            <h3 className="team__title">Akash Rana</h3>
                            <p className="team__job"> Senior Chef</p>
                        </div>

                        <div className="team__socials">
                            <a href="/" className="team__social-link">
                                <FaFacebookF/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaTwitter/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaLinkedin/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaYoutube/>
                            </a>
                        </div>
                    </div>
                    <div className="team__item">
                        <img src={chef4} alt="" className="team__img" />

                        <div className="team__data">
                            <h3 className="team__title">Chandarmukhi</h3>
                            <p className="team__job"> Senior Chef</p>
                        </div>

                        <div className="team__socials">
                            <a href="/" className="team__social-link">
                                <FaFacebookF/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaTwitter/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaLinkedin/>
                            </a>
                            <a href="/" className="team__social-link">
                                <FaYoutube/>
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Team