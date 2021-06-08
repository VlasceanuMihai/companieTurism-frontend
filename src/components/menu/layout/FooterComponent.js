import { useEffect, useState } from "react";
import { Navbar, Container, Col } from "react-bootstrap";

function FooterComponent() {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Col lg={12} className="text-center text-muted">
          <div>{fullYear} * Rights Reserved by Ghita Andrei-Rafael</div>
        </Col>
      </Container>
    </Navbar>
  );
}

export default FooterComponent;
