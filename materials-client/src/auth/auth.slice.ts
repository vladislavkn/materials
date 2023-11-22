import {
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  isAnyOf,
} from "@reduxjs/toolkit";
import API from "./auth.api";
import { User } from "@/shared/types";
import { SignInDTO, SignUpDTO } from "./auth.types";
import localStorageUserAPI from "./auth.localStorageUserApi";
import { AxiosError } from "axios";

export const signIn = createAsyncThunk<User, SignInDTO>(
  "auth/sign-in",
  async (payload) => {
    const user = await API.signIn(payload);
    localStorageUserAPI.saveUser(user);
    return user;
  }
);

export const signUp = createAsyncThunk<User, SignUpDTO>(
  "auth/sign-up",
  async (payload) => {
    const user = await API.signUp(payload);
    localStorageUserAPI.saveUser(user);
    return user;
  }
);

export const signOut = createAsyncThunk("auth/sign-out", async () => {
  localStorageUserAPI.removeUser();
  await API.signOut();
  return null;
});

export const signInOnLoad = createAsyncThunk(
  "auth/get-auth-on-load",
  async (_, { dispatch }) => {
    const savedUser = localStorageUserAPI.getUser();
    dispatch(setUser(savedUser));

    try {
      return API.getSignedInUser();
    } catch (e) {
      console.error(e);
      return null;
    }
  }
);

type AuthSliceState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const authSlice = createSlice<
  AuthSliceState,
  SliceCaseReducers<AuthSliceState>
>({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser(state, { payload }: PayloadAction<User>) {
      state.user = payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(
        signIn.pending,
        signOut.pending,
        signUp.pending,
        signInOnLoad.pending
      ),
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        signIn.rejected,
        signOut.rejected,
        signUp.rejected,
        signInOnLoad.rejected
      ),
      (state, { error }) => {
        state.loading = false;
        state.error = error.message ?? "Some error occured";
      }
    );
    builder.addMatcher(
      isAnyOf(
        signIn.fulfilled,
        signUp.fulfilled,
        signInOnLoad.fulfilled,
        signOut.fulfilled
      ),
      (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      }
    );
  },
});

const { setUser } = authSlice.actions;
export default authSlice.reducer;
