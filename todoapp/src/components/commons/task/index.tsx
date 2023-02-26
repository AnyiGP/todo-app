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
    <Card style={{ width: '18rem'}}className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date.toString()}</Card.Text>
        <Card.Text>{description}</Card.Text>
        {/* <Card.Text style={{color: category.color}}>{category.name}</Card.Text> //ver error de porque no me toma category*/}
      </Card.Body>
      <Card.Footer className="text-muted">{status}</Card.Footer>
    </Card>
  );
};

export { Task };
