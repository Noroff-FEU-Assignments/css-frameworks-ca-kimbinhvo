import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import new1 from '../images/news/news-1.jpg';
import new2 from '../images/news/news-2.jpg';
import new3 from '../images/news/news-3.jpg';
import new4 from '../images/news/news-4.jpg';


function Cards(){
    return (
        <Row className="card-container">
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={new1} alt="First new"/>
                    <Card.Body>
                        <Card.Title className="card-title">Nunc porttitor vel</Card.Title>
                        <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="card">More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={new2} alt="Second new"/>
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="card">More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={new3} alt="Third new"/>
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="card">More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={new4} alt="Fourth new"/>
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="card">More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
    );
}

export default Cards;