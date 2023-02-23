// import { AddTaskForm } from "../types";
import { mapToArray } from "../helpers/mapToArray";
import { AddTaskPayload, Task } from "../types";

import { api } from "../utils/axios";

// const add = async (task: AddTaskForm) => {
  const add = async (task: AddTaskPayload) => {

  const response = await api.post("/tasks.json", task);

  //   console.log(response)
  return response.data;
};

const getAll = async () => {
  const response = await api.get("/tasks.json");

  //   console.log(response)
  return mapToArray<Task>(response.data);
};

export const serviceTasks = { add, getAll };
