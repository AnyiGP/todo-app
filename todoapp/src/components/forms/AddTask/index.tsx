import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { serviceTasks } from "../../../services/tasks";

import { useForm } from "react-hook-form";
import { AddTaskForm } from "../../../types";

const AddTask = () => {
  const { register, handleSubmit } = useForm<AddTaskForm>();

  const onSubmit = (data: AddTaskForm) => {
    serviceTasks.add(data);
  };

  return (
    <Form className="px-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Titulo"
            {...register("title")}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formFecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingresar Fecha"
            {...register("date")}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción"
            {...register("description")}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formFecha">
          <Form.Label>Status</Form.Label>
          <Form.Check
            type="checkbox"
            placeholder="Status"
            {...register("status")}
          />
        </Form.Group>
      </Row>

      <Button variant="dark" type="submit">
        Agregar
      </Button>
    </Form>
  );
};

export { AddTask };
