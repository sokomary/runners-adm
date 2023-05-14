import React, { FC, useState } from "react";
import styled from "styled-components";
import { ReactComponent as DownIcon } from "../../assets/icons/down.svg";
import { Input } from "./Input";
import { Container } from "./Container";

interface Option {
  value: string;
  label: string;
}
const Dropdown: FC<{
  options: Option[];
  placeholder?: string;
  value?: Option;
  onChange: (value: any) => void;
}> = (props) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  return (
    <DropdownContainer vertical gap={0}>
      <DropdownHeader
        gap={5}
        open={optionsOpen}
        onClick={() => setOptionsOpen(!optionsOpen)}
      >
        <PointableField
          value={props.value?.label || props.placeholder || ""}
          placeholder={props.placeholder}
        />
        <StyledIcon open={optionsOpen} />
      </DropdownHeader>
      {optionsOpen && (
        <Items vertical>
          {props.options.map((option, index) => (
            <Item
              selected={props.value?.value === option.value}
              onClick={() => {
                props.onChange(
                  !props.value || props.value?.value !== option.value
                    ? option
                    : undefined
                );
                setOptionsOpen(false);
              }}
              key={index}
            >
              {option.label}
            </Item>
          ))}
        </Items>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled(Container)`
  width: 255px;
`;

const DropdownHeader = styled(Container)<{ open: boolean }>`
  cursor: pointer;
  background-color: rgba(60, 85, 87, 0.9);
  ${(props) =>
    props.open ? "border-radius: 15px 15px 0px 0px;" : "border-radius: 15px ;"}
  padding-right: 10px;
  width: 100%;
`;

const StyledIcon = styled(DownIcon)<{ open: boolean }>`
  align-self: center;
  ${(props) => props.open && "transform: rotate(180deg);"}
`;

const Item = styled.div<{ selected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? "#e9967a" : "white")};
  padding: 10px;
  &:hover {
    color: #e9967a;
    font-weight: bold;
  }
`;

const Items = styled(Container)`
  position: absolute;
  z-index: 99;

  color: white;
  background-color: rgba(60, 85, 87, 0.9);
  margin-top: 44px;
  border-radius: 0px 0px 15px 15px;

  animation-duration: 0.3s;
  animation-name: itemsappears;
  animation-direction: alternate;
  @keyframes itemsappears {
    from {
      transform: scaleY(0);
      transform-origin: top center;
    }
    to {
      transform: scalzeY(1);
      transform-origin: top center;
    }
  }
  width: 255px;
  max-height: 150px;
  overflow-y: scroll;
  padding-left: 10px;
`;

const PointableField = styled(Input)`
  cursor: pointer;
  color: white;
  background-color: rgba(60, 85, 87, 0);
`;

export { Dropdown };
export type { Option };
