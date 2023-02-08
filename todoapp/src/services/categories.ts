import { AddCategoryForm } from "../types";
import { api } from "../utils/axios";

const add = async (category: AddCategoryForm) => {
  const response = await api.post("/categories.json", category);

  //   console.log(response)
  return response.data;
};

const getAll = async () => {
  const response = await api.get("/categories.json");

  //   console.log(response)
  return response.data;
};

export const serviceCategories = { add, getAll };
