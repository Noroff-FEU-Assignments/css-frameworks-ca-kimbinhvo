import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import carousel1 from '../images/carousel/carousel-1.jpg';
import carousel2 from '../images/carousel/carousel-2.jpg';
import carousel3 from '../images/carousel/carousel-3.jpg';


function Carousels(){
    return (
        <>   
        <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                    />            
                </Carousel.Item>
            </Carousel>
        </>     
    );
}

export default Carousels;