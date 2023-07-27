import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './mot.png'
import { FaTwitter , FaTelegramPlane } from 'react-icons/fa';
function CollapsibleExample() {
  return (
    <div className='container'> <Navbar collapseOnSelect expand="lg" className=" bgnav">
    <br/><br/><br/><br/><br/><br/><br/>
    <Container>
      <Navbar.Brand href="#home">

 <img src={logo} style={{width:"140px"}}/>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        
        </Nav>
        <Nav>
          <Nav.Link href="#about" className='Navbars_tab'>About</Nav.Link>&nbsp;&nbsp;&nbsp;
          <Nav.Link eventKey={2} href="#token" className='Navbars_tab'>
          Tokenomics
          </Nav.Link>&nbsp;&nbsp;&nbsp; 
           <Nav.Link eventKey={2} href="#func" className='Navbars_tab'>
          Functionality 
          </Nav.Link>&nbsp;&nbsp;&nbsp; 


          <Nav.Link eventKey={2} href="https://twitter.com/metamillionseth" className='Navbars_tab'>
         Twitter
          </Nav.Link>

          &nbsp;&nbsp;&nbsp; <Nav.Link eventKey={2} href="https://t.me/MetaMillionsERC" className='Navbars_tab'>
       Telegram
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
   
  );
}

export default CollapsibleExample;