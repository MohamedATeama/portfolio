import React, { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import contact from '../assets/img/contact-img.svg'
import emailjs from "emailjs-com";

export default function Connect() {
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");
        const form = e.target;
        emailjs.sendForm("service_qs2blmv", "template_67bl62o", form, "-RTMzhioyPWHOBonA")
            .then((result) => {
                console.log(result.text);
                setStatus("success");
                form.reset();
            }, (error) => {
                console.error(error.text);
                setStatus("error");
            });
    };

    return (
        <div className="connect" id='connect'>
            <Row className='align-items-center'>
                <Col sm={12} lg={6}>
                    <img src={contact} alt='contact' className='w-100 m-2' />
                </Col>
                <Col sm={12} lg={6}>
                    <div>
                        <h2>Get In Touch</h2>
                        <form onSubmit={sendEmail}>
                            <Row>
                                <Col size={12} sm={6} className='mb-2'>
                                    <input name="fname" type='text' placeholder='First Name' />
                                </Col>
                                <Col size={12} sm={6} className='mb-2'>
                                    <input name="lname" type='text' placeholder='Last Name' />
                                </Col>
                                <Col size={12} sm={6} className='mb-2'>
                                    <input name="email" type='email' placeholder='Email Address' />
                                </Col>
                                <Col size={12} sm={6} className='mb-2'>
                                    <input name="phone" type='tel' placeholder='Phonr Number' />
                                </Col>
                                <Col size={12}>
                                    <textarea name="message" rows={6} placeholder='Message'></textarea>
                                    <Button type='submit'>{status === "sending" ? "Sending..." : "Send"}</Button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
