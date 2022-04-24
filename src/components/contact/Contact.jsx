import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import Facebook from "../../img/fb.png"
import Instagram from "../../img/insta.png"
import Twitter from "../../img/twitter.png"
import Linkedin from "../../img/linkedin.png"
import { useState, useContext } from 'react'
import { ThemeContext } from "../../context"

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_ktk0k22',
            'template_9ds8weo',
            formRef.current,
            'm4SOqzVFVywqbywKE')

            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's Discuss Your Project!
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src='./images/phone.png' alt="" className="c-icon" />
                            +9779867021760
                        </div>
                        <div className="c-info-item">
                            <img src='./images/email.png' alt="" className="c-icon" />
                            po0janhunt@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src='./images/address.png' alt="" className="c-icon" />
                            Bafal,Kathmandu,Nepal
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>What's your story? </b>
                        Get in touch with me, Always along the way!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder='Message' name='message'></textarea>
                        <button>Submit</button>
                        {done && "Thank you for submitting the form!"}
                    </form>
                </div>
            </div>
            <div className="c-footer">
                <a href='https://www.facebook.com/Hunt3rr/' target='_blank' rel="noreferrer" className='c-facebook'>
                    <img src={Facebook} alt="Facebook" height="20" width="20" />
                </a>
                <a href='https://www.instagram.com/p0ojan/' target='_blank' rel="noreferrer" className='c-instagram'>
                    <img src={Instagram} alt="Insta" height="20" width="20" />
                </a>
                <a href='https://twitter.com/hunt3rr21' target='_blank' rel="noreferrer" className='c-twitter'>
                    <img src={Twitter} alt="Twitter" height="20" width="20" />
                </a>
                <a href='https://www.linkedin.com/in/poojan-pradhan-8709b0217/' target='_blank' rel="noreferrer" className='c-linkedin'>
                    <img src={Linkedin} alt="LinkedIn" height="20" width="20" />
                </a>
            </div>
        </div>
    )
}

export default Contact