import React from 'react'

import chooseImg from '../../assets/images/choose.jpg'
import coffeeMug from '../../assets/images/coffee-mug.svg'
import coffeeBens2 from '../../assets/images/coffee-beans-2.svg'
import coffeeBens3 from '../../assets/images/coffee-beans-3.svg'
import './choose.css'


const Choose = () => {
    return (
        <section className="choose section">
            <div className="choose__grid container grid">
                <div className="choose__content">
                    <h2 className="section__title title-left"
                        data-title='Why Choose Us'>
                        Coffero Most Our Of Your Favorite & Tasty Coffee House
                    </h2>
                    <p className="choose__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quos, assumenda in? Sequi alias sapiente
                        aliquid autem blanditiis doloremque dignissimos
                        nam?
                    </p>

                    <div className="choose__details grid">
                        <div className="choose__details item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeMug} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">
                                    Awesome Aroma
                                </h3>
                                <p className="choose__details-description">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Atque sunt unde quis laboriosam aspernatur quas!
                                    </p>
                            </div>
                        </div>
                        <div className="choose__details items">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBens2} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">
                                    Pure Grades
                                    
                                </h3>
                                <p className="choose__details-description">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio tempora neque nam.
                                    </p>
                            </div>
                        </div>
                        <div className="choose__details items">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBens3} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">
                                    Healthy Coffee
                                </h3>
                                <p className="choose__details-description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quaerat eum
                                        saepe iure! Nesciunt, suscipit itaque.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>


                <img src={chooseImg} alt="" className="choose__image" />
            </div>
        </section>
    )
}

export default Choose