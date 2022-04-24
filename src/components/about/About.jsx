import React from 'react'
import "./about.css"


function About() {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className="a-card bg">
                    <img src='./images/Profile2.jpg' alt="Profile2" className="a-img"></img>
                </div>
                <div className="a-card">
                    <img src='./images/profile.jpg'
                        alt="ProfilePic" className="a-img" />
                </div>
            </div>
            <div className='a-right'>
                <h1 className="a-title">About Me</h1>
                <p className='a-sub'>
                    I'm a certified Computer Engineer, from Butwal.
                </p>
                <p className='a-desc'>
                    I've been working as a full time backend developer for over a year, involving real time projects such as Ride Sharing Application, Dater, NGO-Site, etc
                </p>
                <div className="a-achievement">
                    <img src='./images/TU.png' alt="" className="a-achievement-img" />
                    <div className="a-achievement-texts">
                        <h4 className='a-achievement-title'>
                            Bachelors in Computer Engineering
                        </h4>
                        <p className='a-achivement-desc'>
                            I completed my Bachelor's in Computer Engineering at Kathmandu Engineering College, TU, Kathmandu.
                        </p>
                    </div>
                </div>
                <div className="a-achievement">
                    <img src='./images/college.png' alt="" className="a-achievement-img" />
                    <div className="a-achievement-texts">
                        <h4 className='a-achievement-title'>
                            Higher Secondary Education (+2)
                        </h4>
                        <p className='a-achivement-desc'>
                            I completed my higher studies in Science at New Horizon College, Butwal
                        </p>
                    </div>
                </div>
                <div className="a-achievement">
                    <img src='./images/school.png' alt="" className="a-achievement-img" />
                    <div className="a-achievement-texts">
                        <h4 className='a-achievement-title'>
                            Primary and Secondary Level Studies
                        </h4>
                        <p className='a-achivement-desc'>
                            I completed my pirmary and secondary studies at Butwal Public School, Butwal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About