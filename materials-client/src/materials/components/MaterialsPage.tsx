import Layout from "@/shared/ui/Layout/Layout";
import { Outlet } from "react-router-dom";

const MaterialsPage = () => {
  return (
    <Layout sidebar={"sidebar"}>
      <Outlet />
    </Layout>
  );
};

export default MaterialsPage;
