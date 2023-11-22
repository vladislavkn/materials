import http from "@/shared/http";
import { Material, MaterialPreview } from "./types";

const getMaterialsList = () =>
  http.get<MaterialPreview[]>("/materials").then((response) => response.data);

const getMaterial = (id: number) =>
  http.get<Material>(`/materials/${id}`).then((response) => response.data);

const API = {
  getMaterialsList,
  getMaterial,
};

export default API;
