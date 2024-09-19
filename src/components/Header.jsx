import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Header = () => {
    return (
        <>href="./resume.jpg"download

            <Navbar  collapseOnSelect expand="lg" className='bg-dark ml-auto nav' data-bs-theme="dark">
                <Container className=''>
                    <Navbar.Brand href="#">
                        <img src="public/images/logo.png" style={{ width: "150px", height: "50px", marginLeft:"-25px"}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto ms-auto" >
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Work">Work</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                        <Button variant="secondary" href="public/Yawar_Resume.pdf" download className='button-common' style={{ border: "none"}}>Download CV</Button>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    )
}
export default Header;