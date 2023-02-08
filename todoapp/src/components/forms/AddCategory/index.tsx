import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { api } from "../../../utils/axios";
import { serviceCategories } from "../../../services/categories";

import { useForm } from "react-hook-form";
import { AddCategoryForm } from "../../../types";

const AddCategory = () => {
  const { register, handleSubmit } = useForm<AddCategoryForm>();

  const onSubmit = (data: AddCategoryForm) => {
    serviceCategories.add(data);
  };

  return (
    <Form className="px-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Nombre" {...register("name")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="color"
          placeholder="Ingresar Color"
          {...register("color")}
        />
      </Form.Group>

      <Button variant="dark" type="submit">
        Agregar
      </Button>
    </Form>
  );
};

export { AddCategory };
