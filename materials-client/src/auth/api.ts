import http from "@/shared/http";
import { User } from "@/shared/types";
import { SignInDTO, SignUpDTO } from "./types";

const signIn = (dto: SignInDTO) =>
  http.post<User>("/auth/sign-in", dto).then((response) => response.data);

const signUp = (dto: SignUpDTO) =>
  http.post<User>("/auth/sign-up", dto).then((response) => response.data);

const signOut = () =>
  http.post("/auth/sign-out").then((response) => response.data);

const getSignedInUser = () =>
  http.get<User>("/auth/me").then((response) => response.data);

const API = {
  signIn,
  signUp,
  signOut,
  getSignedInUser,
};

export default API;
