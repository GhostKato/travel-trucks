import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import s from "./Input.module.css";
import "react-datepicker/dist/react-datepicker.css";

type InputProps = {
  name: string;
  label?: string;
  type?: string;
  as?: "input" | "textarea" | "datepicker";
};

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  as = "input",
}) => {
  const { setFieldValue, values } = useFormikContext<unknown>();
  
  const value = (values as Record<string, unknown>)[name];

  return (
    <div className={s.container}>
      {as === "textarea" && (
        <Field
          id={name}
          name={name}
          as="textarea"
          placeholder={label}
          className={s.textarea}
        />
      )}

      {as === "datepicker" && (
        <DatePicker
          id={name}
          selected={value ? new Date(value as string | number) : null}
          onChange={(date) => setFieldValue(name, date)}
          className={s.input}
          dateFormat="yyyy-MM-dd"
          placeholderText={label}
          autoFocus={false}
        />
      )}

      {as === "input" && (
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={label}
          className={s.input}
        />
      )}

      <ErrorMessage name={name}>
        {(msg) => <div className={s.error}>{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
