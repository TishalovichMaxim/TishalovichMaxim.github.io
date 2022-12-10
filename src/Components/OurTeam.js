import {Card, ListGroup, Container, Row, Col} from 'react-bootstrap';
import { Telegram, Github } from 'react-bootstrap-icons';

import { useTranslation } from 'react-i18next';

function OurTeam() {

  const { t, i18n } = useTranslation();

  return (

    <Container>
        <Row>
            <h1 className='text-center'>{t("our-team-title")}</h1>
        </Row>
        <Row className='justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center'>
                <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://www.hdwallpapers.in/download/demon_slayer_black_and_white_kyojuro_rengoku_with_sword_hd_anime-1920x1080.jpg" />
                <Card.Body>
                    <Card.Title>{t("creator-1-name")}</Card.Title>
                    <Card.Text>
                    {t("creator-1-description")} 
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-center">
                    <ListGroup.Item>
                        <Card.Link href="#"><Github/>GitHub</Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Link href="#"><Telegram/>Telegram</Card.Link>
                    </ListGroup.Item>
                </ListGroup>
                </Card>
            </Col>
            <Col className='d-flex justify-content-center align-items-center'>
                <Card style={{ width: '18rem' }}>
                <Card.Img width="" variant="top" src="https://wallpaperboat.com/wp-content/uploads/2020/10/10/56411/anime-black-and-white-02.jpg" />
                <Card.Body>
                    <Card.Title>{t("creator-2-name")}</Card.Title>
                    <Card.Text>
                    {t("creator-2-description")}  
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-center">
                    <ListGroup.Item>
                        <Card.Link href="#"><Github/>GitHub</Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Link href="#"><Telegram/>Telegram</Card.Link>
                    </ListGroup.Item>
                </ListGroup>
                </Card>
            </Col>

            <Col className='d-flex justify-content-center align-items-center'>
                <Card style={{ width: '18rem' }}>
                <Card.Img width="" variant="top" src="https://wallpapercave.com/wp/wp3110694.jpg" />
                <Card.Body>
                    <Card.Title>{t("creator-3-name")}</Card.Title>
                    <Card.Text>
                    {t("creator-3-description")}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-center">
                    <ListGroup.Item>
                        <Card.Link href="#"><Github/>GitHub</Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>                     
                        <Card.Link href="#"><Telegram/>Telegram</Card.Link>
                    </ListGroup.Item>                    
                </ListGroup>
                </Card>
            </Col>            
        </Row>
    </Container>
  );
}

export default OurTeam;