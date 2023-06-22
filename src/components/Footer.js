import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {

  return (

    <div>
    <div className='myFooter'>
        <div className='data1 data'>
            {/* <h1 className='footerText'>Code Your Chances © 2020</h1>
            <br/> */}
            <a href='https://www.guidestar.org/profile/84-4777706' target='blank'><img src = {process.env.PUBLIC_URL + "/images/guideStar.svg"} alt = "CYC" className = "guideStar" /></a>
            <br/><br/>
            <h1 className='footerText'>Code Your Chances is a registered 501(c)(3)</h1>
        </div>
        <div className='data'>
            <a href='/codeyourchances/'><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" className='logo'></img></a>
        </div>
        <div className='data'>
            <h1 className='footerText'>Follow Us</h1>
            <div className='socials'>
                <a href='https://www.instagram.com/codeyourchances/' target='blank'><FontAwesomeIcon icon={faInstagram} className='icons insta'/></a>
                <a href='https://www.facebook.com/codeyourchances1/' target='blank'><FontAwesomeIcon icon={faFacebook} className='icons facebook'/></a>
                <a href="mailto: info@codeyourchances.com" target='blank'><FontAwesomeIcon icon={faEnvelope} className='icons email'/></a>
            </div>
            <div className='cycEmail'><a href="mailto: info@codeyourchances.com" target='blank' className='footerText'>info@codeyourchances.com</a></div>
            <br/>
            <a href="/codeyourchances/privacy" className='footerText2'>Privacy Policy</a>
        </div>
    </div>
    <div className='bottom'>
            <h1 className='footerTextMain'>Code Your Chances © 2023</h1>
        </div>
        </div>

  )
}