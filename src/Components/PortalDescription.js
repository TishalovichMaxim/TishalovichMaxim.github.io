import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import PencilImg from '../Images/pencil.svg'

function PortalDescription() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src={PencilImg} className='rounded-pill'/>            
                    </Col>

                    <Col className='d-flex align-items-center'>
                        <Container className="text-center align-items-center">
                        <h1>Belarusian Poets</h1>
                        <h2>This is a portal about poets who live or have lived in Belarus
                            , regardless of the language of their work.</h2>
                        </Container>
                    </Col>  
                </Row>
            </Container>            
        </>
    );
  }
  
  export default PortalDescription;