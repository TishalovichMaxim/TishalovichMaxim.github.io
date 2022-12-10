import React from "react";
import { Col, Container, Row, Image, Button, Alert, Card} from 'react-bootstrap';

function WriterIcon(props) {
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
                                            <Alert.Heading className="text-right"><h1>{props.name}</h1>
                                            </Alert.Heading>
                                            <hr />
                                            <h2>
                                                {props.description}
                                            </h2>
                                    <h2>
                                                {props.dates}
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
  
  export default WriterIcon;