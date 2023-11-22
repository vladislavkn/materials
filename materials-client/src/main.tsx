import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.ts";
import { signInOnLoad } from "./auth/auth.slice.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";

store.dispatch(signInOnLoad());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
