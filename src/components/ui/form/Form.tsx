import React, { FC } from "react";
import { Form as BaseForm, FormProps } from "react-final-form";

const Form: FC<FormProps> = (props) => (
  <BaseForm
    initialValues={props.initialValues}
    className={props.className}
    onSubmit={props.onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>{props.children}</form>
    )}
  >
    {props.children}
  </BaseForm>
);

export { Form };
