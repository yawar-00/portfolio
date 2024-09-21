import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Work = () => {
    const [visibleCards, setVisibleCards] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false
    });

    const cardRefs = {
        card1: useRef(null),
        card2: useRef(null),
        card3: useRef(null),
        card4: useRef(null)
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cardId = entry.target.getAttribute('data-card-id');
                        setVisibleCards((prev) => ({
                            ...prev,
                            [cardId]: true
                        }));
                        observer.unobserve(entry.target); // Stop observing once it's in view
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        Object.keys(cardRefs).forEach(card => {
            if (cardRefs[card].current) {
                observer.observe(cardRefs[card].current);
            }
        });

        return () => {
            Object.keys(cardRefs).forEach(card => {
                if (cardRefs[card].current) {
                    observer.unobserve(cardRefs[card].current);
                }
            });
        };
    }, []);

    return (
        <Container className="work" id='Work'>
            <div style={{ display: "flex" }}>
                <h1>Work</h1>
                <div className='line'></div>
            </div>
            <p className='work-p'>
                Developed and deployed multiple websites on Vercel, utilizing modern web technologies such as HTML, CSS, JavaScript, and React. Designed user-friendly interfaces and ensured responsive design across various devices.
            </p>
            <Container>
                <Row>
                    <Col md={6}>
                        <center>
                            <Card
                                ref={cardRefs.card1}
                                data-card-id="card1"
                                className={`card card-left ${visibleCards.card1 ? 'slide-in-left' : ''}`}
                                style={{ width: '18rem' }}
                            >
                                <Card.Img variant="top" src="images/card1.jpg" />
                                <Card.Body>
                                    <Card.Title className='card-title'>Designed Portfolio</Card.Title>
                                    <Card.Text>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                    </Card.Text>
                                    <Button variant="secondary" className='button-common'>
                                        <a target="_blank" href="https://trito-ovxu2li70-yawar-00s-projects.vercel.app/">Visit</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                    <Col md={6}>
                        <center>
                            <Card
                                ref={cardRefs.card2}
                                data-card-id="card2"
                                className={`card card-right ${visibleCards.card2 ? 'slide-in-right' : ''}`}
                                style={{ width: '18rem' }}
                            >
                                <Card.Img variant="top" src="images/card2.jpg" />
                                <Card.Body>
                                    <Card.Title className='card-title'>Apple Website Clone</Card.Title>
                                    <Card.Text>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>JS</span>
                                    </Card.Text>
                                    <Button variant="secondary" className='button-common'>
                                        <a target="_blank" href="https://appleyawar.vercel.app/">Visit</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <center>
                            <Card
                                ref={cardRefs.card3}
                                data-card-id="card3"
                                className={`card card-left ${visibleCards.card3 ? 'slide-in-left' : ''}`}
                                style={{ width: '18rem' }}
                            >
                                <Card.Img variant="top" src="images/card3.jpg" />
                                <Card.Body>
                                    <Card.Title className='card-title'>Amazon Clone</Card.Title>
                                    <Card.Text>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                    </Card.Text>
                                    <Button variant="secondary" className='button-common'>
                                        <a target="_blank" href="https://amazon-clone-six-ruddy.vercel.app/">Visit</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                    <Col md={6}>
                        <center>
                            <Card
                                ref={cardRefs.card4}
                                data-card-id="card4"
                                className={`card card-right ${visibleCards.card4 ? 'slide-in-right' : ''}`}
                                style={{ width: '18rem' }}
                            >
                                <Card.Img variant="top" src="images/card4.jpg" />
                                <Card.Body>
                                    <Card.Title className='card-title'>Admin Dashboard</Card.Title>
                                    <Card.Text>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>JS</span>
                                        <span>JSON</span>
                                    </Card.Text>
                                    <Button variant="secondary" className='button-common'>
                                        <a target="_blank" href="https://appleyawar.vercel.app/">Visit</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Work;
