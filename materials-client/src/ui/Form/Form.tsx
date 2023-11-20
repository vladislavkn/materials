import { FC, HTMLProps, ReactNode, useState } from "react";
import Field from "../Field/Field";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import Text from "../Text/Text";

type FormFields = Record<string, string | number>;
type ValidationError = string | undefined;

export type FormProps = {
  config: Record<string, HTMLProps<HTMLInputElement>>;
  onSubmit: (fields: FormFields) => void;
  validate?: (fields: FormFields) => ValidationError;
  primaryButtonText?: string;
  actions?: ReactNode;
};

const Form: FC<FormProps> = ({
  config,
  validate,
  onSubmit,
  primaryButtonText = "Submit",
  actions,
}) => {
  const { register, handleSubmit } = useForm();
  const [validationError, setValidationError] =
    useState<ValidationError>(undefined);

  const onSubmitWithValidation = (fields: FormFields) => {
    if (validate) {
      const validationResult = validate(fields);
      setValidationError(validationResult);
      if (validationResult) {
        return;
      }
    }

    onSubmit(fields);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitWithValidation)}
      className={styles.form}
    >
      {Object.entries(config).map(([name, options]) => (
        <Field key={name} {...options} {...register(name)} />
      ))}
      <div className={styles.formActions}>
        {actions}
        <Button type="submit">{primaryButtonText}</Button>
      </div>
      {validationError && <Text variant="error">{validationError}</Text>}
    </form>
  );
};

export default Form;
