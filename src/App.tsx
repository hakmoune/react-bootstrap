import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>React</Breadcrumb.Item>
        <Breadcrumb.Item active>App</Breadcrumb.Item>
      </Breadcrumb>

      <Alert variant="success">This is an Alert with variant "success"</Alert>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/2.jpg"></Card.Img>
        <Card.Body>
          <Card.Title>Card Example Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text className="mt-3">
            Card Example Text: Some quick example text to build on the card
            title and make up the bulk of the card's content.{" "}
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button variant="primary" className="mt-2">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>

      <Form>
        <Row>
          <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="example@email.com" />
              <Form.Text className="text-muted">
                we'll never share your personal data, trust us!
              </Form.Text>
            </Form.Group>
          </Col>

          <Col md>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*****" />
              <Form.Text className="text-muted">
                need to be more than 12 charcteres!
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="primary">
          Submit!
        </Button>
      </Form>
    </Container>
  );
}

export default App;
