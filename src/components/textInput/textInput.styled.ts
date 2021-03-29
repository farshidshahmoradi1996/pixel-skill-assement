import styled from "styled-components";
import { TextInputProps } from "./textInput.props";

export const StyledTextInput = styled.input<TextInputProps>`
  border: 1px solid #ccc;
  padding: 5px 8px;
  border-radius: 3px;
  outline: none !important;
  transition: border-color 0.5s ease;
  :focus {
    border-color: palevioletred;
  }
`;
