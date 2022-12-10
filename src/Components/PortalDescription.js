import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import PencilImg from '../Images/pencil.svg'

import { useTranslation } from 'react-i18next';

function PortalDescription() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src={PencilImg} className='rounded-pill'/>            
                    </Col>

                    <Col className='d-flex align-items-center'>
                        <Container className="text-center align-items-center">
                        <h1>{t("portal-description-title")}</h1>
                        <h2>{t("portal-description-content")}</h2>
                        </Container>
                    </Col>  
                </Row>
            </Container>            
        </>
    );
  }
  
  export default PortalDescription;