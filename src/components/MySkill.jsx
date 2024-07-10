import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MySkill = () => {
    return (
        <Container className="skill" id='Myskill'>
            <div style={{ display: "flex", marginBottom: "100px" }}>
                <h1>my skills</h1>
                <div className='line' style={{ width: "76%" }}></div>
            </div>
            <Container>
                <Row>
                    <Col md={6} className='p-5'> 
                        <h2>Everyday <br/>develop skills</h2> 
                        <p>Experienced in web and product development using HTML, CSS, JavaScript, Java, React, and Bootstrap, with a proven track record of delivering solutions for a range of startups across various industries</p>                   
                    </Col>
                    <Col md={6} className='p-5 mt-5'>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>Bootstrap</li>
                            <li>Json</li>
                            <li>JAVA</li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}
export default MySkill
// 
