import { createBrowserRouter } from "react-router-dom";
import {
  ROUTE_MATERIALS,
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
} from "./shared/constants";
import { SignInPage, SignUpPage } from "./auth";
import { MaterialsPage } from "./materials";

const router = createBrowserRouter([
  {
    path: ROUTE_SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: ROUTE_SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: ROUTE_MATERIALS,
    element: <MaterialsPage />,
  },
]);

export default router;
