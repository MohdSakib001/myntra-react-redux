import ReactDOM from "react-dom/client";
import React from "react";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListItems } from "./routes/ListItems.jsx";
import { Bag } from "./routes/Bag.jsx";
import myntraStore from "./store/index.js";
import { Provider } from "react-redux";
import { Login } from "./auth/Login.jsx";
import { SignUp } from "./auth/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <ListItems />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provider to pass the store to the whole app */}
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
