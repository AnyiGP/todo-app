export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  bithdate: Date;
};

 //creo un type para trer lo estado para el formulario
export type SignUpForm = Omit<User, "id">;

export type Category = {
  id: string;
  name: string;
  color: string
};

export type AddCategoryForm = Omit<Category, "id">;

export type Task = {
  id: string;
  title: string;
  date: Date;
  category: Category;
  description: string;
  status: string;
};

// export type AddTaskForm = Omit<Task, "id">;

export type AddTaskForm = Omit<Task, "id" | "category" | "date"> & { category: string, date: string };