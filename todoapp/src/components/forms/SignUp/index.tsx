import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SignUp = () => {
  return (
    <Form className="px-5 mt-5">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control placeholder="Apellido" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formBirthday">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export { SignUp };
