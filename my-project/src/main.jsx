import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App2 from "./About/App2.jsx";
import App3 from "./Products/App3.jsx";
import App4 from "./Service/App4.jsx";
import App5 from "./Blog/App5.jsx";
import App6 from "./Contacts/App6.jsx";
import App7 from "./Last/App7.jsx";
import App8 from "./Last1/App8.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="" element={<App />} />
      <Route path="/about" element={<App2 />} />
      <Route path="/products" element={<App3 />} />
      <Route path="/service" element={<App4 />} />
      <Route path="/blog" element={<App5 />} />
      <Route path="/contacts" element={<App6 />} />
      <Route path="/login" element={<App7/>} />
      <Route path="/register" element={<App8/>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
