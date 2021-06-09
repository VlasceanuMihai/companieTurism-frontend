import { Col, Container, Row, Jumbotron } from "react-bootstrap";
import NavbarComponent from "../navbar/NavbarComponent";

function HomeComponent() {
  const marginTop = {
    marginTop: "50px",
    marginLeft: "70px",
    marginRight: "70px",
    background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
  };

  return (
    <div>
      <NavbarComponent />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Jumbotron>
              <h1>
                Hello, guys!
                <p>Lucrare de licenta Ghita Andrei Rafael - Companie turism</p>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeComponent;
