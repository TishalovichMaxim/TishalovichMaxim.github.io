import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

function Gallery(props) {
    return (
        <Container>
					<Row>
						<Col>
							<label for="carousel" class="form-label">Галерея</label>
							<Carousel id="carousel">
							{props.images.map((img,i)=>
											<Carousel.Item>
													<img
															className="d-block w-100"
															src={img}
															alt={i}
													/>
											</Carousel.Item>
									)}
							</Carousel>
							<br></br>
						</Col>
					</Row>
				</Container>
    );
}

export default Gallery;