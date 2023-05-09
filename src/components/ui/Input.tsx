import React, {
  FC,
  HTMLInputTypeAttribute,
  forwardRef,
  KeyboardEventHandler,
  ReactChild,
  CSSProperties,
} from "react";
import styled from "styled-components";
import { Container } from "./Container";

interface InputProps {
  label?: string;
  multiline?: boolean;
  type?: HTMLInputTypeAttribute;
  invisible?: boolean;
  maxlen?: number;
  ref?:
    | ((instance: HTMLInputElement | HTMLTextAreaElement | null) => void)
    | React.RefObject<HTMLInputElement | HTMLTextAreaElement>
    | null;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  leftIcon?: ReactChild;
  theme?: "light" | "dark";
  opacity?: "strong" | "glass";
  onChange?: (value: string) => void;
  value: string;
  placeholder?: string;
  style?: CSSProperties;
  className?: string;
  border?: boolean;
  autoFocus?: boolean;
  onFocus?: () => void;
  onClick?: () => void;
}

const Input: FC<InputProps> = forwardRef((props, ref) => (
  <Container className={props.className} vertical gap={5}>
    {props.label && <div>{props.label}</div>}
    {!props.multiline ? (
      <Container>
        <LeftIcon>{props.leftIcon}</LeftIcon>
        <StyledInput
          autoFocus={props.autoFocus}
          border={props.border}
          onFocus={props.onFocus}
          onClick={props.onClick}
          theme={props.theme}
          leftIcon={!!props.leftIcon}
          invisible={props.invisible}
          className={props.className}
          style={props.style}
          type={props.type || "text"}
          placeholder={props.placeholder}
          ref={ref as React.RefObject<HTMLInputElement>}
          onKeyDown={props.onKeyDown}
          value={props.value}
          onChange={(e) => props.onChange && props.onChange(e.target.value)}
          opacity={props.opacity}
        />
      </Container>
    ) : (
      <StyledTextArea
        autoFocus={props.autoFocus}
        onClick={props.onClick}
        onFocus={props.onFocus}
        ref={ref as React.RefObject<HTMLTextAreaElement>}
        border={props.border}
        theme={props.theme}
        value={props.value}
        className={props.className}
        style={props.style}
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown}
        onChange={(e) => props.onChange && props.onChange(e.target.value)}
        opacity={props.opacity}
      />
    )}
  </Container>
));

const StyledInput = styled.input<{
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
  
  height: 45px;
  color: #89887A;
  
  outline: none;
  line-height: 21px;
  font-size: 18px;
  
    &::placeholder {
   color: #89887A;
  };
`;

const StyledTextArea = styled.textarea<{
  theme: "light" | "dark";
  border?: boolean;
  opacity?: "strong" | "glass";
}>`
  resize: none;
  width: 100% !important;
  height: 60px;
  min-height: 25px;
  max-height: 80px;
  
  background-color: ${(props) =>
    props.opacity === "glass"
      ? "rgba(255, 255, 255, 0.49)"
      : "rgba(255, 255, 255, 0.65)"}};
  
  font-family: "Roboto", sans-serif;
  
  border-width: 1px;
  border-radius: 15px;
  border-style: ${(props) =>
    props.theme === "dark" || props.border ? "solid" : "none"};
  border-color: ${(props) =>
    props.theme === "dark" ? "#89887A" : "rgba(255, 255, 255, 0.65)"};

  color: #89887A;
  padding: 10px 15px;
  
  outline: none;
  line-height: 21px;
  font-size: 18px;
  
  &::placeholder {
   color: #89887A;
  };
`;

const LeftIcon = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: -34px;
  z-index: 2;
  height: 45px;
  display: flex;
  width: 34px;
  align-items: center;
  justify-content: center;
  padding-left: 7px;
`;

export { Input };
