import React from "react";

import { Row, Col, Container, Image, Button, Card, Alert} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import writersInfos from './WriterComponents/WritersInfos.js'
 
import "../App.css"

function DailyWriter() {

    const { t, i18n } = useTranslation();

    let writer;
    let nWriter = Math.floor(Math.random() * 10);
    nWriter %= 5;
    switch(nWriter){
        case 0:
            writer = writersInfos.kolas;
            break;
        case 1:
            writer = writersInfos.kupala;
            break;
        case 2:
            writer = writersInfos.bykov;
            break;
        case 3:
            writer = writersInfos.shamiakin;
            break;
        case 4:
            writer = writersInfos.baradulin;
            break;       
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <Card className="text-center mt-5 mb-5 half-transp-card">
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Alert variant="success">
                                    <Alert.Heading>{t("daily-writer-title")}: {t(writer.name)}<br/>
                                            </Alert.Heading>
                                    <hr />
                                    <p>
                                        {t("life-years-title")}: {writer.lifeDate}
                                    </p>
                                    <hr />
                                    <p className="mb-0">
                                    {t("biography-title")}:  
                                        {t(writer.info)}
                                    </p>
                                    <hr />
                                    <p className="mb-0">
                                    {t("famouse-works-title")}: 
                                        {t(writer.famouseWorks)} 
                                    </p>
                                    </Alert>
                                    <Button variant="success" size="lg">
                                        <Link to={"/writerPage/" + writer.index} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                            {t("learn-more-button")}
                                        </Link>
                                    </Button>
                                </Col>
                                <Col>
                                    <Image
                                        rounded
                                        height={500}
                                        src={writer.image}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
  }
  
  export default DailyWriter;