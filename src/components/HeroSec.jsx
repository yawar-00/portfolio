import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const HeroSec=()=>{
    return(
        <Container id='Home' style={{marginTop:"75px"}}>
        <Row>
          <Col md={6} className='p-5 heroSec'>
            <h5>Hello, I'm Yawar,</h5>
            <h1>FUll Stack <br/> Developer</h1>
            <span><a href="#Contact">Contact Me</a></span>
          </Col>
          <Col md={6}>
            <center>
            <Image src="public/images/avatar.jpg" height="450px" width="auto" rounded />
            </center>
          </Col>
        </Row>
      </Container>  
    )
}
export default HeroSec;