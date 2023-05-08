import React, { FC, forwardRef } from "react";
import styled from "styled-components";
import { CommonProps } from "./CommonProps";

interface Props extends CommonProps {
  vertical?: boolean;
  gap?: number;
  onClick?: () => void;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null;
}

const Container: FC<Props> = forwardRef((props, ref) => (
  <FlexContainer
    ref={ref}
    vertical={props.vertical}
    gap={props.gap}
    className={props.className}
    style={props.style}
    onClick={props.onClick}
  >
    {props.children}
  </FlexContainer>
));

const FlexContainer = styled.div<{
  vertical?: boolean;
  gap?: number;
}>`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column;" : "row;")}
    ${(props) =>
      !props.gap ? "justify-content: space-between;" : `gap: ${props.gap}px;`};
`;

export { Container };
