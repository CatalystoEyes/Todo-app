import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./screens/Home";
import "./index.css";
import Layout from "./Components/Layout";
import { store } from "./store/store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Favourite from "./screens/Favourite";
import Completed from "./screens/Completed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/favourite",
    element: <Favourite/>,
  },
  {
    path: "/completed",
    element: <Completed/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
      <h1 className="text-center text-4xl font-bold mb-5 pt-10 text-white">
        Todo app
      </h1>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  </React.StrictMode>
);
