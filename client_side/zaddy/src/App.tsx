import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Login } from "./components/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
