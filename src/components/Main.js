import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../assets/img/banner.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Main() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['FullStack Web Developer', 'FrontEnd Developer', 'BackEnd Developer'];
  const period = 2000;
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {clearInterval(ticker) };
    }, [text]);

    const tick =() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      
      setText(updatedText);
      
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
      
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
      }
    }

  return (
    <main className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} lg={6} xl={7}>
            <span className='tagline'>Welcome All In My Portfolio</span>
            <h1>Hi! I'm Mohamed Teame, <span className='wrap'>{text}</span></h1>
            <p className='main-paragraph'>I'm a passionate Full Stack Developer with expertise in both Frontend and Backend development. I create modern, responsive, and user-friendly web applications using the latest technologies. My goal is to deliver high-quality solutions that combine clean code, seamless performance, and great user experience.</p>
            <button onClick={() => {window.location.href='#connect'}}>Let's Connect <i className="bi bi-arrow-right-circle"></i></button>
          </Col>
          <Col xs={12} lg={6} xl={5} className='d-lg-block d-none'>
            <img className='w-100' src={banner} alt='main banner' />
          </Col>
        </Row>
      </Container>
    </main>
  )
}
