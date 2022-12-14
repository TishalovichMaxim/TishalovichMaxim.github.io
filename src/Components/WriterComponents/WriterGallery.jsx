import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

function Gallery(props) {
    return (
        <Container>
						<div class="row">
							<div class="col-md-1 mx-auto mt-5 mb-5">
							<label for="carousel" class="form-label display-5 text-danger">Галерея</label>
							</div>
						</div>
					<Row>
						<Col>							
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