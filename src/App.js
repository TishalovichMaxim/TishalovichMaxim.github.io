import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Breadcrumb, Image, Carousel, Stack} from 'react-bootstrap';
import Navibar from './Components/Navibar.js'
import PortalDescription from './Components/PortalDescription';
import OurTeam from './Components/OurTeam';

function App() {
  return (
    <>
      <Navibar/>    
      <PortalDescription/>
      <OurTeam/>
    </>
  );
}

export default App;
