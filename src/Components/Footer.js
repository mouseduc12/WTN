import React from "react";
import "../ComponentStyles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrap">
                <div className="service">
                    <div className="support">
                        <h3>Support</h3>
                        <p>Help Center</p>
                        <p>About Us</p>
                        <p>View Site Tips</p>
                    </div>
                    <div className="legal">
                        <h3>Legal & Privacy</h3>
                        <p>Term & Conditions</p>
                        <p>Privacy</p>
                        <p>Cookies</p>
                    </div>
                    <div className="tools">
                        <h3>Tools</h3>
                        <p>Porfolio</p>
                        <p>Economic Calendar</p>
                        <p>News feed</p>
                        <p>Contracts and tender</p>
                    </div>
                    <div className="follow-newsletter">
                        <h3>Get Market Alert Every day from WTN!</h3>
                        <input type = "email" placeholder ="Email"/>
                    </div>
                </div>
                <hr/>
                <div className="end">
                    <h3>Washington Time News</h3>
                    <p>
                        Markets data delayed by at least 15 minutes. © Washington Time News LTD 2018. WTN and ‘Washington Time News’ are trademarks of Washington Time News Ltd.
                        The Washington Time News and its journalism are subject to a self-regulation regime under the WTS Editorial Code of Practice.
                    </p>
                    <div className="font-awesome">
                        <span><FontAwesomeIcon icon={['fab', 'facebook']} /></span>
                        <span><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
                        <span><FontAwesomeIcon icon={['fab', 'linkedin']} /></span>
                        <span><FontAwesomeIcon icon={['fab', 'youtube']} /></span>
                    </div>
                </div>
                <p style ={{fontSize: 13}}>Developed By Duc</p>
            </div>
        </div>
    )
}
export default Footer;