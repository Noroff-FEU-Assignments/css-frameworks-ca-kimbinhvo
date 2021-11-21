import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer(){
    return (
        <>   
        <footer>
            <Row xs={2} md={3}>
                <Col xs={12}>
                    <div className="footer-icons">
                        <FaVimeoV /> 
                        <FaYoutube /> 
                    </div>
                </Col>
                <Col  xs={6}>hello@yay.com</Col>
                <Col  xs={6}>Copyright2020</Col>
            </Row>
        </footer>
        </>     
    );
}

export default Footer;