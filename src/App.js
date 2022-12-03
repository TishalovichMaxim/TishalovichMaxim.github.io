import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Breadcrumb, Image, Carousel} from 'react-bootstrap';
import Navibar from './Components/Navibar.js'
function App() {
  return (
    //<Button variant="secondary">Left</Button>
  
    <Container>
      <Navibar/>    
    </Container>
  );
}

export default App;
