import { LabelProps } from "./label.props";
import { StyledLabel } from "./label.styled";

export const Label: React.FC<LabelProps> = ({
  children,
  size = "md",
  ...rest
}) => {
  return (
    <StyledLabel {...rest} size={size}>
      {children}
    </StyledLabel>
  );
};
