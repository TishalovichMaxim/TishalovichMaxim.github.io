import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Card } from 'react-bootstrap';

import '../../App.css';

function Gallery(props) {
    return (
		<>
			<Container className='py-5 my-3 rounded'>
				<Row className="align-items-center justify-content-center">
					<Card style={{ width: '80rem' }} className="pb-5">
						<Container className>
							<Row className="text-center align-items-center justify-content-center my-4">
								<Col className='bg-dark rounded-pill mx-2 py-3 text-light' sm={10}><h2>Галерея</h2></Col>
							</Row>
							<Row className="align-items-center justify-content-center">
								<Col xs lg="10">
									<Carousel id="carousel">
										{props.images.map((img,i)=>
											<Carousel.Item>
												<img
													rounded
													className="d-block w-100"
													src={img}
													alt={i}
												/>
											</Carousel.Item>)}
									</Carousel>
								</Col>
							</Row>
						</Container>
					</Card>
				</Row>
			</Container>
		</>
    );
}

export default Gallery;