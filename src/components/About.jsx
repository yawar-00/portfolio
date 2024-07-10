import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <Container className="about" id='About'>
            <div style={{ display: "flex" }}>
                <h1>About</h1>
                <div className='line'></div>
            </div>
            <p>I am seeking an internship that provides opportunities for technical development and allows me to contribute effectively to the organization. I aim to apply and expand my skills in a dynamic environment, working collaboratively to drive innovative solutions. This internship will enhance my technical competencies and prepare me for a successful career.</p>
            <Container>
                <Row>
                    <Col md={6} style={{marginTop:"75px"}}>
                        <center>
                            <div className='about-div'>
                                <h2>Front-End</h2>
                                <span >60+ Hours Experience</span>
                            </div>
                        </center>
                    </Col>
                    <Col md={6} style={{marginTop:"75px"}}>
                        <center>
                            <div className='about-div'>
                                <h2>JAVA</h2>
                                <span>1.5+ Years Experience</span>
                            </div>
                        </center>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About;