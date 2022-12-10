import React from "react";
import { Col, Container, Row, Image, Button, Alert, Card} from 'react-bootstrap';

function Figure() {
    return (
        <>
						<Container>
                    <Col>
                    <Card className="text-center">
											<Row>
											<div class="h-25">
											<Image
                      rounded              
                      src="https://upload.wikimedia.org/wikipedia/commons/0/05/Yanka_Kupala.jpg"
											class="img-fluid"
                      /> 	
											</div>
											</Row>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Alert variant="success" className="alert-info">
                                    <Alert.Heading className="text-right"><h1>Yanka Kupala</h1>
                                            </Alert.Heading>
                                    <hr />
                                    <h2>
                                        Life years: 7.07.1882-28.06.1942 
                                    </h2>
                                    </Alert>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                    </Card>
                    </Col>
            </Container>      
        </>
    );
  }
  
  export default Figure;