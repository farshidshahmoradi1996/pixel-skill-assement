import { ButtonProps } from "./button.props";
import { StyledButton } from "./button.styled";

export const Button: React.FC<ButtonProps> = ({
  children,
  preset = "simple",
  ...rest
}) => {
  return (
    <StyledButton preset={preset} {...rest}>
      {children}
    </StyledButton>
  );
};
