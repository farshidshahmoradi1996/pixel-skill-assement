import { CheckBoxProps } from "./checkbox.props";
import { StyledCheckbox } from "./checkbox.styled";
import { RiCheckboxLine, RiCheckboxBlankLine } from "react-icons/ri";
export const CheckBox: React.FC<CheckBoxProps> = ({
  value = false,
  onChange = () => {},
}) => {
  return (
    <StyledCheckbox onClick={() => onChange(!value)}>
      {value ? <RiCheckboxLine /> : <RiCheckboxBlankLine />}
    </StyledCheckbox>
  );
};
