import { TextInputProps } from "./textInput.props";

import { StyledTextInput } from "./textInput.styled";

export const TextInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return <StyledTextInput {...rest} type="text" />;
};
