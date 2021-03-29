import { Button } from "components/button/button";
import { TodoEditorProps } from "./todoEditor.props";
import { Container } from "./todoEditor.styled";
import { useState } from "react";
import { TextInput } from "components/textInput/textInput";
import { BiCheck } from "react-icons/bi";
export const TodoEditor: React.FC<TodoEditorProps> = ({
  name: _name,
  onChange,
}) => {
  const [name, setName] = useState<string>(_name);
  return (
    <Container>
      <TextInput
        autofocus
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <Button preset="icon" onClick={() => onChange?.(name)}>
        <BiCheck size={25} />
      </Button>
    </Container>
  );
};
