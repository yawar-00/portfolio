import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Work = () => {
    return (
        <Container className="work" id='Work'>
            <div style={{ display: "flex"}}>
                <h1>Work</h1>
                <div className='line'></div>
            </div>
            <p className='work-p'>Developed and deployed multiple websites on Vercel, utilizing modern web technologies such as HTML, CSS, JavaScript, and React.Designed user-friendly interfaces and ensured responsive design across various devices.</p>
            <Container>
            <Row>
                    <Col md={6}>
                        <center>
                            <Card className='card' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="public/images/card1.jpg" />
                                <Card.Body >
                                    <Card.Title className='card-title'>Designed Portfolio</Card.Title>
                                    <Card.Text>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                    </Card.Text>
                                    <Button variant="secondary" className='button-common'><a target="_blank" href="https://trito-ovxu2li70-yawar-00s-projects.vercel.app/">Visit</a></Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                    <Col md={6}>
                        <center>
                            <Card className='card' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="public/images/card2.jpg" />
                                <Card.Body >
                                    <Card.Title className='card-title'>Apple Website Clone</Card.Title>
                                    <Card.Text>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>JS</span>
                                    </Card.Text>
                                    <Button variant="secondary" className='button-common'><a target="_blank" href="https://appleyawar.vercel.app/">Visit</a></Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>

                </Row>
                <Row >
                    <Col md={6}>
                        <center>
                            <Card className='card' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="public/images/card3.jpg" />
                                <Card.Body >
                                    <Card.Title className='card-title'>Amazon Clone</Card.Title>
                                    <Card.Text>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                    </Card.Text>
                                    <Button variant="secondary" className='button-common'><a target="_blank" href="https://amazon-clone-six-ruddy.vercel.app/">Visit</a></Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                    <Col md={6}>
                        <center>
                            <Card className='card' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="public/images/card4.jpg" />
                                <Card.Body >
                                    <Card.Title className='card-title'>Admin Dashboard</Card.Title>
                                    <Card.Text>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>JS</span>
                                        <span>JSON</span>
                                    </Card.Text>
                                    <Button variant="secondary" className='button-common'><a target="_blank" href="https://appleyawar.vercel.app/">Visit</a></Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}
export default Work


