import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./components/ErrorPage";
import About from "./routes/About";
import Home from "./routes/Home";
import Content from "./routes/Content";
import ChatWindow from "./components/ChatWindow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "content",
        element: <Content />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <>
    <RouterProvider router={router} />
    <ChatWindow />
  </>
);
