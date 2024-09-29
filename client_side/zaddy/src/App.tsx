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
        <Navbar loggedIn={false} />
        <Login />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar loggedIn />
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
