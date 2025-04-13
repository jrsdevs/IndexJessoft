import React from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="main-bg text-white">
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg py-3">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            💻 Jessoft
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#projects">Clientes</Nav.Link>
              <Nav.Link href="#about">Sobre mí</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        fluid
        className="vh-100 d-flex align-items-center justify-content-center text-center"
      >
        <Row>
          <Col>
            <h1 className="display-1 fw-bold glitch" data-text="¡Hola Mundo!">
              ¡Hola Mundo!
            </h1>
            <p className="lead fs-4 mt-3">
              Soy{" "}
              <span className="fw-bold text-info">
                desarrollador de software
              </span>{" "}
              con ideas fuera de este mundo al alcance de tu negocio 🚀
            </p>
            <Button variant="info" size="lg" className="mt-4 shadow-lg">
              Explora mi universo
            </Button>
          </Col>
        </Row>
      </Container>

      <section
        id="about"
        className="py-5 bg-dark text-white position-relative z-2"
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="/img/jessoft_about_me.jpg"
                alt="Sobre mí"
                className="size-img rounded shadow-lg"
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-4">Sobre mí</h2>
              <p className="fs-5">
                ¡Hola! Soy un apasionado del desarrollo de software con una
                obsesión por lo creativo, lo eficiente y lo elegante. Me encanta
                transformar ideas en soluciones digitales, trabajar en equipo y
                construir experiencias únicas con código.
              </p>
              <p className="fs-5">
                Domino tecnologías como <span className="text-info">React</span>
                , <span className="text-info">Node.js</span>,{" "}
                <span className="text-info">.NET</span> y{" "}
                <span className="text-info">SQL Server</span>. Me emociona cada
                nuevo reto y siempre estoy aprendiendo algo nuevo.
              </p>
              <Button variant="outline-info" size="md" className="mt-3">
                Ver CV
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Sección Contacto */}
      <section
        id="contact"
        className="py-5 bg-black text-white position-relative z-2"
      >
        <Container>
          <Row className="justify-content-center mb-4">
            <Col md={8} className="text-center">
              <h2 className="fw-bold mb-3">Contáctame</h2>
              <p className="fs-5">
                ¿Tienes una idea genial? ¡Hagámosla realidad juntos! 💡
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <h5 className="mb-2">📞 Teléfono</h5>
              <p className="text-info fs-5">+52 123 456 7890</p>
              <h5 className="mb-2">✉️ Correo Electrónico</h5>
              <p className="text-info fs-5">contacto@jessoft.dev</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
