import { FC, HTMLProps, ReactNode } from "react";
import Field from "../Field/Field";
import { FieldValues, useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import Text from "../Text/Text";

export type FormProps = {
  config: Record<string, HTMLProps<HTMLInputElement>>;
  onSubmit: (fields: FieldValues) => void;
  primaryButtonText?: string;
  actions?: ReactNode;
  errorMessage?: string | null;
  loading?: boolean;
};

const Form: FC<FormProps> = ({
  config,
  onSubmit,
  actions,
  errorMessage,
  primaryButtonText = "Submit",
  loading = false,
}) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {Object.entries(config).map(([name, options]) => (
        <Field key={name} {...options} {...register(name)} />
      ))}
      <div className={styles.formActions}>
        {actions}
        <Button disabled={loading} type="submit">
          {primaryButtonText}
        </Button>
      </div>
      <div className={styles.formErrors}>
        {errorMessage && <Text variant="error">{errorMessage}</Text>}
      </div>
    </form>
  );
};

export default Form;
