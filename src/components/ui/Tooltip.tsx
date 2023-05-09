import React, { FC } from "react";
import { Tooltip as OriginalTooltip } from "react-tooltip";
import styled from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Md5 } from "ts-md5";

const Tooltip: FC<{ content: string }> = (props) => {
  const hashId = Md5.hashStr(props.content);
  return (
    <>
      {!!props.content.length && <StyledTooltip id={hashId} />}
      <StyledDiv
        data-tooltip-id={hashId}
        data-tooltip-delay-show={400}
        data-tooltip-content={props.content}
      >
        {props.children}
      </StyledDiv>
    </>
  );
};

const StyledTooltip = styled(OriginalTooltip)`
  background-color: #435b5c;
`;

const StyledDiv = styled.div`
  width: fit-content;
`;

export { Tooltip };
