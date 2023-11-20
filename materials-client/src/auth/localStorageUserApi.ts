import { User } from "@/shared/types";

const USER_LOCALSTORAGE_KEY = "auth_user";

const saveUser = (user: User) => {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
};

const getUser = () => {
  const stringifiedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (!stringifiedUser) {
    return null;
  }

  return JSON.parse(stringifiedUser) as User;
};

const localStorageUserAPI = {
  saveUser,
  getUser,
  removeUser,
};

export default localStorageUserAPI;
