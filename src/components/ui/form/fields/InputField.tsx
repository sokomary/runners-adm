import React, {
  FC,
  HTMLInputTypeAttribute,
  useEffect,
  forwardRef,
  KeyboardEventHandler,
  ReactChild,
} from "react";
import { Field, useField } from "react-final-form";
import styled from "styled-components";
import { FieldProps } from "./FieldProps";
import { Container } from "../../Container";

interface InputProps extends FieldProps {
  multiline?: boolean;
  type?: HTMLInputTypeAttribute;
  invisible?: boolean;
  maxlen?: number;
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  leftIcon?: ReactChild;
  theme?: "light" | "dark";
  border?: boolean;
  placeholder?: string;
  opacity?: "strong" | "glass";
  unlimWidth?: boolean;
}

const InputField: FC<InputProps> = forwardRef((props, ref) => {
  const { input: value } = useField(props.name);

  useEffect(() => {
    if (props.maxlen && value.value.length > props.maxlen) {
      value.onChange(value.value.substring(0, props.maxlen));
    }
  }, [props.maxlen, value]);

  return (
    <Field name={props.name} validate={props.validate}>
      {({ input, meta }) => (
        <Container
          vertical
          gap={5}
          className={props.className}
          style={props.style}
        >
          {props.label && <Label>{props.label}</Label>}
          {!props.multiline ? (
            <>
              {props.leftIcon && <LeftIcon>{props.leftIcon}</LeftIcon>}
              <StyledInput
                disabled={props.disabled}
                opacity={props.opacity}
                border={props.border}
                theme={props.theme}
                leftIcon={!!props.leftIcon}
                invisible={props.invisible}
                valuelength={value.value.length}
                className={props.className}
                required={props.required}
                style={props.style}
                type={props.type || "text"}
                placeholder={props.placeholder}
                ref={ref as React.RefObject<HTMLInputElement>}
                onKeyDown={props.onKeyDown}
                {...input}
              />
            </>
          ) : (
            <StyledTextArea
              disabled={props.disabled}
              unlimWidth={props.unlimWidth}
              border={props.border}
              theme={props.theme}
              valuelength={value.value.length}
              className={props.className}
              required={props.required}
              style={props.style}
              type={props.type || "text"}
              placeholder={props.placeholder}
              opacity={props.opacity}
              {...input}
            />
          )}
          {meta.touched && meta.error && <Error>{meta.error}</Error>}
        </Container>
      )}
    </Field>
  );
});

const Error = styled.div`
  color: red;
  font-size: 10px;
`;

const StyledInput = styled.input<{
  valuelength?: number;
  invisible?: boolean;
  leftIcon: boolean;
  theme: "light" | "dark";
  border?: boolean;
  opacity?: "strong" | "glass";
}>`
  padding: ${(props) => {
    if (props.invisible) {
      return "0;";
    }
    if (props.leftIcon) {
      return "0 15px 0 43px;";
    }
    return "0 15px;";
  }}
  
  border-style: ${(props) =>
    props.theme === "dark" || props.border ? "solid" : "none"};
  border-color: ${(props) =>
    props.theme === "dark" ? "#89887A" : "rgba(255, 255, 255, 0.65)"};
  
  background-color: ${(props) => {
    if (props.invisible) {
      return "rgba(255, 255, 255, 0)";
    }
    if (props.opacity === "glass") {
      return "rgba(255, 255, 255, 0.49)";
    }
    return "rgba(255, 255, 255, 0.65)";
  }}; 
 
  ${(props) =>
    props.invisible
      ? `
    border-style: none;
  `
      : `
    border-width: 1px;
    border-radius: 15px;
  `};
  height: 43px;
  color: #89887A;
  
  outline: none;
  line-height: 21px;
  font-size: 18px;
  
  &::placeholder {
   color: #89887A;
  };
  
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  };
  
  &:hover, &:focus {
    appearance: none;
    -moz-appearance: textfield;
  };
  width: inherit;
}
`;

const StyledTextArea = styled.textarea<{
  unlimWidth?: boolean;
  valuelength?: number;
  theme: "light" | "dark";
  border?: boolean;
  opacity?: "strong" | "glass";
}>`
  resize: none;
  height: 60px;
  min-height: 25px;
  max-height: 80px;
  width: inherit;
  font-family: "Roboto", sans-serif;

  border-width: 1px;
  border-radius: 15px;
  border-style: ${(props) =>
    props.theme === "dark" || props.border ? "solid" : "none"};
  border-color: ${(props) =>
    props.theme === "dark" ? "#89887A" : "rgba(255, 255, 255, 0.65)"};

  color: #89887a;
  padding: 10px 15px;

  outline: none;
  line-height: 21px;
  background-color: ${(props) =>
    props.opacity === "glass"
      ? "rgba(255, 255, 255, 0.49)"
      : "rgba(255, 255, 255, 0.65)"};
  font-size: 18px;

  &::placeholder {
    color: #89887a;
  }
`;

const LeftIcon = styled.div`
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  height: 45px;
  display: flex;
  width: 34px;
  align-items: center;
  justify-content: center;
  padding-left: 7px;
`;

const Label = styled.div`
  font-size: 14px;
`;

export { InputField };
