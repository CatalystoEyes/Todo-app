import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./screens/Home"
import "./index.css"
import Layout from "./Components/Layout"

ReactDOM.createRoot(document.getElementById("root")!).render(
<React.StrictMode>
  <Layout>
    <Home />
  </Layout>
</React.StrictMode>
)
