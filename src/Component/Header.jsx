import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header() {
    return (
        <>
        {['xl' ].map((expand) => (
            
          <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">YO SOY PROGRAMADOR</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <b>YO SOY PROGRAMADOR</b>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Cursos 2023 </Nav.Link>
                    
                    <NavDropdown
                      title="Curso"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Java 11</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                      Spring Boot
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">MYSQL</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">PL/SQL</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Diseño Web</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Python</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">React</NavDropdown.Item>                     
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action2"><b>Contactenos +54 9 3512101216</b></Nav.Link>
                    
                    <Nav.Link href="#action2"><b>Todos los cursos son ONLINE</b></Nav.Link>
                 
                   
                  </Nav>
                  
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
  
  export default Header;