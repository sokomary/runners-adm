import React, { FC } from "react";
import styled, { css } from "styled-components";
import { CommonProps } from "./CommonProps";

interface ButtonProps extends CommonProps {
  styletype?: "primary" | "secondary" | "default" | "accent";
  size?: "regular" | "big" | "small";
  fit?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button: FC<ButtonProps> = (props) => (
  <StyledButton
    type={props.type || "button"}
    styletype={props.styletype}
    fit={props.fit}
    disabled={props.disabled}
    onClick={props.onClick}
    size={props.size}
    style={props.style}
    className={props.className}
  >
    {props.children}
  </StyledButton>
);

const StyledButton = styled.button<{
  styletype?: "primary" | "secondary" | "default" | "accent";
  size?: "regular" | "big" | "small";
  fit?: boolean;
  disabled?: boolean;
}>`
  cursor: pointer;

  background-color: #ffffff;
  outline: none;
  border: none;

  width: fit-content;
  height: ${(props) => {
    if (props.size === "big") {
      return "60px";
    }
    if (props.size === "small") {
      return "24px";
    }
    return "45px";
  }};

  border-radius: ${(props) => (props.size === "big" ? "20px" : "15px")};

  background-color: ${(props) => {
    if (props.disabled) {
      return "#B1B1B1";
    }
    if (props.styletype === "accent") {
      return "#E9967A";
    }
    if (props.styletype === "secondary") {
      return "rgba(255, 255, 255, 0.29)";
    }
    return "rgba(255, 255, 255, 0.89)";
  }};

  color: ${(props) => {
    if (props.disabled) {
      return "#FFFFFF";
    }
    if (props.styletype === "default") {
      return "#E9967A";
    }
    if (props.styletype === "accent") {
      return "#FFFFFF";
    }
    if (props.styletype === "primary") {
      return "#3C5557";
    }
    return "#FFFFFF";
  }};
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.size === "small" ? "0 12px" : "0 20px")};

  ${(props) =>
    !props.disabled &&
    css`
      &:active {
        background-color: ${() => {
          if (props.styletype === "accent") {
            return "rgba(245, 161, 133, 1)";
          }
          if (props.styletype === "secondary") {
            return "rgba(255, 255, 255, 0.5)";
          }
          return "#FFFFFF";
        }};
      }
    `}

  width: ${(props) => (props.fit ? "100%" : "")};
  font-size: ${(props) => (props.size === "small" ? "14px" : "18px")};
`;

export { Button };
export type { ButtonProps };
