import {Card, ListGroup, Container, Row, Col} from 'react-bootstrap';
import { Telegram, Github } from 'react-bootstrap-icons';

function OurTeam() {
  return (

    <Container>
        <Row>
            <h1 className='text-center'>Our team</h1>
        </Row>
        <Row className='justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center'>
                <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://www.hdwallpapers.in/download/demon_slayer_black_and_white_kyojuro_rengoku_with_sword_hd_anime-1920x1080.jpg" />
                <Card.Body>
                    <Card.Title>Tishalovich Maxim</Card.Title>
                    <Card.Text>
                    The most important developer of our team. Best chess player after cmak33. 
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
                    <Card.Title>Eremeychik Kirill</Card.Title>
                    <Card.Text>
                    Java cenior developer. Master of Sports in swimming.  
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
                    <Card.Title>Gonzarevich Ilya</Card.Title>
                    <Card.Text>
                    Assembler developer. Basketball MVP.
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