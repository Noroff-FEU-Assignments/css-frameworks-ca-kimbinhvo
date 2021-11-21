import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import tab1 from '../images/tab/tab-1.jpg';
import tab2 from '../images/tab/tab-2.jpg';
import tab3 from '../images/tab/tab-3.jpg';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Accordions(){
    return (
        <>
        <Accordion defaultActiveKey="0" className="d-md-none accordions"> 
            <Accordion.Item eventKey="0">
                <Accordion.Header>First</Accordion.Header>
                <Accordion.Body>
                 <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                 <img className="img-tab" src={tab1} alt="First slide"></img>
                 <div className="accordions-icons">
                    <FaFacebookF /> 
                    <FaTwitter /> 
                </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Second</Accordion.Header>
                <Accordion.Body>
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                <img className="img-tab" src={tab2} alt="Second slide"></img>
                <div className="accordions-icons">
                    <FaFacebookF /> 
                    <FaTwitter /> 
                </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Third</Accordion.Header>
                <Accordion.Body>
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                <img className="img-tab" src={tab3} alt="Third slide"></img>
                <div className="accordions-icons">
                    <FaFacebookF /> 
                    <FaTwitter /> 
                </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <div className="d-none d-md-block">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="First" title="First">
                    <Row>
                        <Col sm={3}><img className="img-tab" src={tab1} alt="First slide"></img></Col>
                        <Col sm={9}> 
                            <p> Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                            <div className="tab-icons">
                                <FaFacebookF /> 
                                <FaTwitter /> 
                            </div>
                        </Col>    
                        
                    </Row>
                </Tab>
                <Tab eventKey="Second" title="Second">
                    <Row>
                        <Col sm={3}><img className="img-tab" src={tab2} alt="First slide"></img></Col>
                        <Col sm={9}> 
                            <p> Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                            <div className="tab-icons">
                                <FaFacebookF /> 
                                <FaTwitter /> 
                            </div>
                        </Col>    
                    </Row>
                </Tab>
                <Tab eventKey="Third" title="Third">
                    <Row>
                        <Col sm={3}><img className="img-tab" src={tab3} alt="First slide"></img></Col>
                        <Col sm={9}> 
                            <p> Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                            <div className="tab-icons">
                                <FaFacebookF /> 
                                <FaTwitter /> 
                            </div>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
        </>       
    );
}

export default Accordions;