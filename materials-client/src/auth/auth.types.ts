export type SignInDTO = {
  email: string;
  password: string;
};

export type SignUpDTO = SignInDTO & {
  passwordRepeat: string;
};

export type User = {
  email: string;
  id: number;
};
