import { RootState } from "@/store";

export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectUser = (state: RootState) => state.auth.user;
