import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-app-final-41cb1-default-rtdb.firebaseio.com/",
  params: {
    api_key: "prueba",
  },
});

export { api };

// api.post("/users.json");
// api.post("/addCategory.json")
