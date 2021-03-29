import styled from "styled-components";

import { ButtonProps } from "./button.props";

export const StyledButton = styled.button<ButtonProps>`
  background: ${(props) =>
    props.preset === "simple" ? "#364968" : "transparent"};
  border: none !important;
  outline: none !important;
  font-weight: bold;
  border-radius: 5px;
  color: ${(props) => (props.preset === "simple" ? "white" : "#364968")};
  cursor: pointer;
  padding: ${(props) => (props.preset === "simple" ? "4px 10px" : "none")};
  transition: box-shadow 0.5s ease;
  :hover {
    box-shadow: ${(props) =>
      props.preset === "simple" ? "0 0 5px #364968" : ""};
  }
`;
