import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import contact from '../assets/img/contact-img.svg'
export default function Connect() {

    return (
        <div className="connect" id='connect'>
            <Row className='align-items-center'>
                <Col sm={12} lg={6}>
                    <img src={contact} alt='contact' className='w-100 m-2' />
                </Col>
                <Col sm={12} lg={6}>
                    <div>
                        <h2>Get In Touch</h2>
                        <form>
                            <Row>
                                <Col size={12} sm={6} className='mb-2'>
                                    <input type='text' placeholder='First Name' />
                                </Col>
                                <Col size={12} sm={6} className='mb-2'>
                                    <input type='text' placeholder='Last Name' />
                                </Col>
                                <Col size={12} sm={6} className='mb-2'>
                                    <input type='email' placeholder='Email Address' />
                                </Col>
                                <Col size={12} sm={6} className='mb-2'>
                                    <input type='tel' placeholder='Phonr Number' />
                                </Col>
                                <Col size={12}>
                                    <textarea rows={6} placeholder='Message'></textarea>
                                    <Button type='submit'>Send</Button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
