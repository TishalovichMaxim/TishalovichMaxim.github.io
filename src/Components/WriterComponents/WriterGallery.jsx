import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Gallery(props) {
    return (
        <div>
            <Carousel>
            {props.images.map((img,i)=>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img}
                            widht="710"
                            height = "470"
                            alt={i}
                        />
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
}

export default Gallery;