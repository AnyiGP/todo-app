import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Categories, Dashboard, Login, Signup, Users, Task } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/tasks" element={<Tasks />} /> */}
        <Route path="/add-task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
