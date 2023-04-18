import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DogRandom from "./pages/DogRandom";
import User from "./pages/User";
import HttpStatusRandom from "./pages/HttpStatusRandomAPI";
import Login from "./pages/Login";
import CRUD from "./pages/CRUD/CRUD";
import CreateClient from "./pages/CRUD/CreateClient";
import EditClient from "./pages/CRUD/EditClient";

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "/app/home",
        element: <User />,
      },
      {
        path: "/app/cat",
        element: <HttpStatusRandom />,
      },
      {
        path: "/app/dog",
        element: <DogRandom />,
      },
      {
        path: "/app/users",
        element: <CRUD />,
      },
      {
        path: "/app/users/create",
        element: <CreateClient />,
      },
      {
        path: "/app/users/edit/:id",
        element: <EditClient />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
