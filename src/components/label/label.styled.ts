import styled from "styled-components";
import { labelSizes } from "./label.presets";
import { LabelProps } from "./label.props";

export const StyledLabel = styled.p<LabelProps>`
  font-size: ${(props) => props.size && labelSizes[props.size]};
  text-decoration: ${(props) => (props.withLine ? "line-through" : "none")};
`;
