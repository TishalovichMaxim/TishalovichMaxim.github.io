import React from "react";
import { Col, Container, Row, Image, Button, Alert, Card} from 'react-bootstrap';
import "./WriterComponents/writerMap.css";

function WriterIcon(props) {
    return (
        <>
            <Container className="mt-3">
                <Col>
                    <Card className="text-center pt-4 bg-dark special-card border border-0">
                        <Row>
                            <div class="h-25">
                                <Image
                                    rounded              
                                    src={props.photo}
                                    class="img-fluid"
                                />        
                            </div>
                        </Row>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col className='d-flex flex-column justify-content-center align-items-center rounded'>
                                        <Alert variant="success" className="alert-info text-dark  border border-dark border-2 special-card" style={{ width: "64rem"}}>
                                            <Alert.Heading><h2>{props.name}</h2>
                                            </Alert.Heading>
                                                <Container>
                                                    <hr />
                                                    <h4>
                                                        {props.description}
                                                    </h4>
                                                    <h4>
                                                        {props.dates}
                                                    </h4>
                                                </Container>
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