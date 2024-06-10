import React from "react";

import "./App.css";

import RootLayout from "./routes/RootLayout";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "exercise/:id",
          element: <ExerciseDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
