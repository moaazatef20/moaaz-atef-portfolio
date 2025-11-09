import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaRegPaperPlane } from 'react-icons/fa';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs
      .sendForm(
        'service_lpwu48e', 
        'template_8ijgt5b', 
        form.current, {
          publicKey: 'TXOSYlnXkSJ4pAwAM',
        }
      )
      .then(
        () => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          e.target.reset(); 
        },
        (error) => {
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return <>
    <Row className="justify-content-center">
            <Col xs={12} className="text-center mb-5">
              <h2 class="section-title" data-text="Contact">Contact Me</h2>
            </Col>
          </Row>
    <Container className="contact-section-wrapper">
      <Row>
        
        <Col lg={5} className="contact-info-wrapper mb-5 mb-lg-0">
          <h3 className="contact-title">Contact Information</h3>
          
          <div className="contact-info-box">
            <span className="contact-icon">
              <FaEnvelope />
            </span>
            <div className="contact-info-text">
              <h6>Email</h6>
              <p>moaazatef2020@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-box">
            <span className="contact-icon">
              <FaWhatsapp />
            </span>
            <div className="contact-info-text">
              <h6>WhatsApp</h6>
              <p>+20 115 399 7337</p>
            </div>
          </div>

          <div className="contact-info-box">
            <span className="contact-icon">
              <FaMapMarkerAlt />
            </span>
            <div className="contact-info-text">
              <h6>Location</h6>
              <p>Egypt, Cairo, Helwan</p>
            </div>
          </div>
          
          <div className="contact-social-icons">
            <a href="https://www.linkedin.com/in/moaaz-atef-9404472a2/" target="_blank" rel="noopener noreferrer" className="social-icon-box-footer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/moaazatef20" target="_blank" rel="noopener noreferrer" className="social-icon-box-footer">
              <FaGithub />
            </a>
            <a href="https://wa.me/01153997317" target="_blank" rel="noopener noreferrer" className="social-icon-box-footer">
              <FaWhatsapp />
            </a>
          </div>
        </Col>

        
        <Col lg={7} className="contact-form-wrapper">
          <h3 className="contact-title">Send Me a Message</h3>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <InputGroup className="input-group-dark">
                <InputGroup.Text><FaUser /></InputGroup.Text>
                <Form.Control type="text" placeholder="Name *" name="user_name" required className="form-control-dark" />
              </InputGroup>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <InputGroup className="input-group-dark">
                    <InputGroup.Text><FaPhoneAlt /></InputGroup.Text>
                    <Form.Control type="tel" placeholder="Phone Number" name="user_phone" className="form-control-dark" />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <InputGroup className="input-group-dark">
                    <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                    <Form.Control type="email" placeholder="Email Address" name="user_email" className="form-control-dark" />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicMessage">
               <InputGroup className="input-group-dark">
                 <InputGroup.Text className="align-items-start pt-3"><FaRegPaperPlane /></InputGroup.Text>
                <Form.Control as="textarea" rows={5} placeholder="Message *" name="message" required className="form-control-dark" />
              </InputGroup>
            </Form.Group>

            <Button type="submit" className="btn-custom-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {submitStatus === 'success' && (
              <Alert variant="success" className="mt-3 contact-alert">
                Message sent successfully!
              </Alert>
            )}
            {submitStatus === 'error' && (
              <Alert variant="danger" className="mt-3 contact-alert">
                Failed to send message. Please try again later.
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  </>
}

export default Contact;

