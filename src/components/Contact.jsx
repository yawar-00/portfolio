import Container from 'react-bootstrap/Container';

const Contact = () => {
    return (
        <Container className="contact" id='Contact'>
            <div style={{ display: "flex" }}>
                <h1>Contact Me</h1>
                <div className='line' style={{ width: "71%" }}></div>
            </div>
            <p>I would love to hear about your project and how I can help. Please fill in the form, and l'll get back to you as soon as possible.</p>
            <div className='form-div'>
                <form>
                    <h6>NAME</h6>
                    <input type="text" /><br />
                    <h6>EMAIL</h6>
                    <input type="email" /><br />
                    <h5>We'll never share your email with anyone else.</h5>
                    <h6>MESSAGE</h6>
                    <textarea className='message'></textarea><br />
                   <center> <button className='formButton'>Send Message</button></center>
                </form>
            </div>
        </Container>
    )
}
export default Contact