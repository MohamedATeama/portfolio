import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='info'>
                    <Row className='align-items-center'>
                        <Col>
                            <h3>See My Projects At Once & Leave Here Your E-mail Address</h3>
                        </Col>
                        <Col lg={7}>
                            <form className="form-inline d-flex flex-column flex-md-row align-items-center">
                                <input className="form-control" type="emaail" placeholder="Enter Address" />
                                <button className="btn" type="submit">Submit</button>
                            </form>
                        </Col>
                    </Row>
                </div>
                <div className='footer-cont d-flex flex-column flex-md-row justify-content-between align-items-center pt-0 pt-md-2 pb-5'>
                    <img src={logo} alt='Logo' />
                    <div className='social-links mt-5 mt-md-0'>
                        <div className='social-icons d-flex justify-content-center justify-content-md-end mb-4'>
                            <a href='https://www.linkedin.com/in/mohammed-teama-1a40571aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={navIcon1} alt='LinkedIn' /></a>
                            <a className='ms-3' href='https://github.com/MohamedATeama'><img src={navIcon2} alt='Github' /></a>
                            <a className='ms-3' href='mailto:mohammed.teama789@gmail.com'><img src={navIcon3} alt='Mail' /></a>
                        </div>
                        <p>Copyright &copy; 2019. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
