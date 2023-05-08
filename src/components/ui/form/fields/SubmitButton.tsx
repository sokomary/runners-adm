import React, { FC } from "react";
import { Button, ButtonProps } from "../../Button";

const SubmitButton: FC<ButtonProps> = (props) => (
  <Button
    type="submit"
    styletype={props.styletype || "accent"}
    fit={props.fit}
    disabled={props.disabled}
    onClick={props.onClick}
    size={props.size}
    style={props.style}
    className={props.className}
  >
    {props.children}
  </Button>
);

export { SubmitButton };
