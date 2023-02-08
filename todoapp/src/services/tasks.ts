import { AddTaskForm } from "../types";
import { api } from "../utils/axios";

const add = async (category: AddTaskForm) => {
  const response = await api.post("/tasks.json", category);

  //   console.log(response)
  return response.data;
};

const getAll = async () => {
  const response = await api.get("/tasks.json");

  //   console.log(response)
  return response.data;
};

export const serviceTasks = { add, getAll };
