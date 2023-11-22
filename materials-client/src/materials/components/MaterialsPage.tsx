import { selectUser } from "@/auth";
import { ROUTE_SIGN_IN } from "@/shared/constants";
import Layout from "@/shared/ui/Layout/Layout";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import MaterialsList from "./MaterialsList";
import MaterialsActions from "./MaterialsActions";

const MaterialsPage = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to={ROUTE_SIGN_IN} />;
  }

  return (
    <Layout
      title={user.email}
      sidebar={<MaterialsList />}
      sidebarActions={<MaterialsActions />}
    >
      <Outlet />
    </Layout>
  );
};

export default MaterialsPage;
