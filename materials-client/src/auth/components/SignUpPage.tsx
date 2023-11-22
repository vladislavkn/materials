import { FC, useState } from "react";
import Box from "ui-box";
import Heading from "@/shared/ui/Heading/Heading";
import Card from "@/shared/ui/Card/Card";
import Form from "@/shared/ui/Form/Form";
import Button from "@/shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../auth.slice";
import { AppDispatch } from "@/store";
import { selectAuthError, selectAuthLoading } from "../auth.selectors";
import { FieldValues } from "react-hook-form";
import { SignUpDTO } from "../auth.types";

const signUpFormConfig = {
  email: {
    type: "email",
    placeholder: "Email",
    required: true,
    autoComplete: "email",
  },
  password: {
    type: "password",
    placeholder: "Password",
    required: true,
    minLength: 8,
    maxLength: 16,
    autoComplete: "new-password",
  },
  passwordRepeat: {
    type: "password",
    placeholder: "Repeat password",
    required: true,
    minLength: 8,
    maxLength: 16,
    autoComplete: "new-password",
  },
};

const SignUpPage: FC = () => {
  const authError = useSelector(selectAuthError);
  const [validationError, setValdiationError] = useState<string | null>(null);
  const error = validationError ?? authError;

  const loading = useSelector(selectAuthLoading);
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (fields: FieldValues) => {
    const signUpDto: SignUpDTO = {
      email: fields.email,
      password: fields.password,
      passwordRepeat: fields.passwordRepeat,
    };

    const validationError = validatePasswordsAreEqual(signUpDto);
    setValdiationError(validationError);

    if (!validationError) {
      dispatch(signUp(signUpDto));
    }
  };

  const validatePasswordsAreEqual = (signUpDto: SignUpDTO) => {
    if (signUpDto.password !== signUpDto.passwordRepeat) {
      return "Passwords are not equal.";
    }

    return null;
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      paddingX="1rem"
    >
      <Card>
        <Heading center>Sign up</Heading>
        <Form
          config={signUpFormConfig}
          onSubmit={onSubmit}
          actions={<Button variant="secondary">Sign in instead</Button>}
          errorMessage={error}
          loading={loading}
        />
      </Card>
    </Box>
  );
};

export default SignUpPage;
