import React from "react";

import { Row, Col, Container, Image, Button, Card, Alert} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function DailyWriter() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <Card className="text-center mt-5 mb-5">
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Alert variant="success">
                                    <Alert.Heading>{t("daily-writer-title")}: Yanka Kupala<br/>
                                            </Alert.Heading>
                                    <hr />
                                    <p>
                                        {t("life-years-title")}: 7.07.1882-28.06.1942 
                                    </p>
                                    <hr />
                                    <p className="mb-0">
                                    {t("biography-title")}: 
                                    Kupala was born on July 7, 1882, in Viazynka, a folwark settlement near Maladzyechna.
                                    His family had been well-known since the early 17th century, coming from the szlachta,
                                     although grown poor so both of his parents had to work as tenant farmers at the folwark.
                                    </p>
                                    <hr />
                                    <p className="mb-0">
                                    {t("famouse-works-title")}: 
                                    "Курган", "Раскиданное гнездо", "Могила льва", "Наследие", "Гусляр" 
                                    </p>
                                    </Alert>
                                    <Button variant="success" size="lg">
                                        {t("learn-more-button")}
                                    </Button>
                                </Col>
                                <Col>
                                    <Image
                                        rounded
                                        height={500}
                                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Yanka_Kupala.jpg"
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