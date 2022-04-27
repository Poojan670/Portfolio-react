import React from 'react'
import "./intro.css"
import CV from "../../img/PoojanCV_2022.pdf"

function intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, My name is </h2>
                    <h1 className='i-name'>Poojan Pradhan</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Backend Developer</div>
                            <div className='i-title-item'>Python Developer</div>
                            <div className='i-title-item'>React Enthusiast</div>
                            <div className='i-title-item'>Computer Engineer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        I design and develop web applications and projects of all sizes. I am especially proficient in Backend Development in Python. I am experienced in Python,Django Rest, FastAPI, Odoo and React.
                    </p>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <button className="btn"><i className="fa fa-download"><a className='btn-a-cv' blank='_blank' href={CV} download> Download CV</a></i></button>
                </div>
            </div>
            <div className="i-right">
                <div className='i-bg'>
                    <img src='./images/me.png' alt='' className='i-img' />
                </div>
            </div>
        </div>
    )
}

export default intro