import React from 'react';
import aboutImg from '../../assets/images/about-img.jpg'
import {FiCheck} from 'react-icons/fi'
import './about.css'


const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>

                <div className="sbout__content">
                    <h2 className="section__title title-left" data-title='About Us'>
                        Fresh Quality And Organic Tasty Coffee House For
                        You
                    </h2>
                    <p className="about__description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, voluptates quisquam. Aliquam animi ipsam at, nam aut ad assumenda consectetur necessitatibus maiores eligendi vero repellendus vitae aliquid dolorem! Illum, iste.
                    </p>

                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck className='about__details-icon'/>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                        </p>
                        <p className="about__details-description">
                            <FiCheck className='about__details-icon'/>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <p className="about__details-description">
                            <FiCheck className='about__details-icon'/>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>

                    <a href="#team" className="btn">
                        Our Experts
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About