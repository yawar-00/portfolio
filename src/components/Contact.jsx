import Container from 'react-bootstrap/Container';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from "antd";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_96e0x1j', 'template_nicbzpf', form.current, {
                publicKey: '4fcqCHA7LmOEbByUh',
            })
            .then(
                () => {
                    message.success('SUCCESS!')
                },
                (error) => {
                    message.error('FAILED!')
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <Container className="contact" id='Contact'>
            <div style={{ display: "flex" }}>
                <h1>Contact Me</h1>
                <div className='line' style={{ width: "71%" }}></div>
            </div>
            <p className='contact-p'>I would love to hear about your project and how I can help. Please fill in the form, and l'll get back to you as soon as possible.</p>
            <div className='form-div'>
                <form ref={form} onSubmit={sendEmail}>
                    <h6>NAME</h6>
                    <input type="text" name="user_name" /><br />
                    <h6>EMAIL</h6>
                    <input type="email" name="user_email" /><br />
                    <h6 style={{ marginTop: "-45px", marginBottom: "50px", fontSize: "10px" }}>We'll never share your email with anyone else.</h6>
                    <h6>MESSAGE</h6>
                    <textarea className='message' name="message"></textarea><br />
                    <center> <button className='formButton' type="submit">SEND MESSAGE</button></center>
                </form>
            </div>
        </Container>
    )
}
export default Contact