// import { type } from "os";
import { FC } from "react";
import { Card } from "react-bootstrap";
import { Task as TaskType } from "../../../types";

const Task: FC<TaskType> = ({
  id,
  title,
  date,
  description,
  category,
  status,
  
}) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{/* {date.toString()} */}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{/* {category.name} */}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{status}</Card.Footer>
    </Card>
  );
};

export { Task };
