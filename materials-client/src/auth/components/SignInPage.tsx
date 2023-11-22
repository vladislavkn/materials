import { FC } from "react";
import Heading from "@/shared/ui/Heading/Heading";
import Card from "@/shared/ui/Card/Card";
import Form from "@/shared/ui/Form/Form";
import Button from "@/shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../auth.slice";
import { AppDispatch } from "@/store";
import { selectAuthError, selectAuthLoading } from "../auth.selectors";
import { FieldValues } from "react-hook-form";
import Layout from "@/shared/ui/Layout/Layout";

const signInFormConfig = {
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
    autoComplete: "current-password",
  },
};

const SignInPage: FC = () => {
  const authError = useSelector(selectAuthError);
  const loading = useSelector(selectAuthLoading);
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (fields: FieldValues) => {
    dispatch(
      signIn({
        email: fields.email as string,
        password: fields.password as string,
      })
    );
  };

  return (
    <Layout>
      <Card>
        <Heading center>Sign in</Heading>
        <Form
          config={signInFormConfig}
          onSubmit={onSubmit}
          actions={<Button variant="secondary">Sign up instead</Button>}
          errorMessage={authError}
          loading={loading}
        />
      </Card>
    </Layout>
  );
};

export default SignInPage;
