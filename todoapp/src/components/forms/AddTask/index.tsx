import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { serviceTasks } from "../../../services/tasks";
import { useForm } from "react-hook-form";
import { AddTaskForm, Category } from "../../../types";
import { serviceCategories } from "../../../services/categories";

const AddTask = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { register, handleSubmit } = useForm<AddTaskForm>();

  useEffect(() => {
    serviceCategories.getAll().then((data) => setCategories(data));
    //falta agregar un catch por si hay error
  }, []);

  const onSubmit = (data: AddTaskForm) => {
    serviceTasks.add(data);
  };

  //falta limpiar el formulario una vez enviada la data

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

      <Form.Group as={Col} controlId="formDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          placeholder="Descripción"
          {...register("description")}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formFecha">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            defaultValue={0}
            aria-label="Default select example"
            {...register("category")}
          >
            <option>Seleccionar</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* {JSON.stringify(categories)} */}

        <Form.Group as={Col} controlId="formFecha">
          <Form.Label>Status</Form.Label>

          <Form.Select
            defaultValue={0}
            aria-label="Default select example"
            {...register("status")}
          >
            <option disabled>Seleccionar</option>
            <option key="one" value="1">
              Pendiente
            </option>
            <option key="two" value="2">
              Hecho
            </option>
            <option key="three" value="3">
              Cancelado
            </option>
            <option key="four" value="4">
              Pospuesto
            </option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="dark" type="submit">
        Agregar
      </Button>
    </Form>
  );
};

export { AddTask };
