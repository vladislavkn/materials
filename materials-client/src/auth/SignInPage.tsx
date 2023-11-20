import { FC } from "react";
import Box from "ui-box";
import Heading from "@/shared/ui/Heading/Heading";
import Card from "@/shared/ui/Card/Card";
import Form, { FormFields } from "@/shared/ui/Form/Form";
import Button from "@/shared/ui/Button/Button";
import { useDispatch } from "react-redux";
import { signIn } from "./slice";
import { AppDispatch } from "@/store";

const signInFormConfig = {
  email: { type: "email", placeholder: "Email", required: true },
  password: {
    type: "password",
    placeholder: "Password",
    required: true,
  },
};

const SignInPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (fields: FormFields) => {
    dispatch(
      signIn({
        email: fields.email as string,
        password: fields.password as string,
      })
    );
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Card>
        <Heading center>Sign in</Heading>
        <Form
          config={signInFormConfig}
          onSubmit={onSubmit}
          actions={<Button variant="secondary">Sign up instead</Button>}
        />
      </Card>
    </Box>
  );
};

export default SignInPage;
