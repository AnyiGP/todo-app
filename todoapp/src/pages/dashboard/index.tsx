import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Layout, Task } from "../../components";
import { serviceTasks } from "../../services/tasks";
import { Task as TaskType } from "../../types";

// import { apiMovies } from "../../utils/axios";

const Dashboard = () => {
  //   //ejemplo de movies, creo un estado
  //   const [movies, setMovies] = useState([]);

  //   //pido a la api
  //   useEffect(() => {
  //     apiMovies
  //       .get("/movie/top_rated")
  //       .then(response => console.log(response.data.results));
  //   }, []);

  //////////////////

  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    serviceTasks.getAll().then((data) => setTasks(data));
  });
  return (
    <Layout>
      {/* <ul>
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul> */}

      <Container fluid>
        <Row>
          {tasks.map((task) => (
            <Col key={task.id}>
              <Task {...task} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export { Dashboard };
