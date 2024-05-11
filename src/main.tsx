import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./screens/Home";
import "./index.css";
import Layout from "./Components/Layout";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  </React.StrictMode>
);
