import React from 'react'
import './reservation.css'
import { FaRegBookmark } from 'react-icons/fa'
import shapeTwo from '../../assets/images/shape-2.png'
import shapeThree from '../../assets/images/shape-3.png'

const Reservation = () => {
    return (
        <section className="reservation container" id="reservation">
            <h2 className="section__title" data-title='Reservation'>
                Book A Table
            </h2>

            <form action="" className="reservation__form grid">
                <div className="form__input-div">
                    <input type="text" placeholder='Enter Your Name' className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="email" placeholder='Enter Your Email Address' className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="text"  placeholder='Enter Your Phone Number' className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="text" placeholder='Enter Date Ex: DD/MM/YY' className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="text" placeholder='Enter Time Ex: 12:01PM ' className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="text" placeholder='Enter No. Of People' className="form__input" />
                </div>
                <div className="form__input-div form__input-textarea">
                    <textarea className="form__input"
                        placeholder='Your Message'
                    >
                    </textarea>
                </div>
                <button className="btn btn--flex reservation__btn">
                    <FaRegBookmark /> Book A Table
                </button>
            </form>
            <img src={shapeTwo} alt="" className="shape__two" />
            <img src={shapeThree} alt="" className="shape__three" />

        </section>
    )
}

export default Reservation