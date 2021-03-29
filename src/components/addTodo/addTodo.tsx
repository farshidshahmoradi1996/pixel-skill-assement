import { useState } from "react";
import { TodoAddProps } from "./addTodo.props";
import { AddTodoContainer } from "./addTodo.styled";
import { IoMdAddCircle } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { TextInput } from "components/textInput/textInput";
import { Button } from "components/button/button";

export const AddTodo: React.FC<TodoAddProps> = ({ onAdd, ...rest }) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const [todoName, setTodoName] = useState<string>("");
  if (isAddMode)
    return (
      <AddTodoContainer>
        <TextInput
          value={todoName}
          onChange={(e: any) => setTodoName(e.target.value)}
        />
        <Button
          preset="icon"
          onClick={() => {
            onAdd(todoName);
            setTodoName("");
            setIsAddMode(false);
          }}>
          <GoCheck size={25} />
        </Button>
      </AddTodoContainer>
    );
  return (
    <AddTodoContainer>
      <IoMdAddCircle
        size={30}
        color={"palevioletred"}
        style={{ cursor: "pointer" }}
        onClick={() => setIsAddMode(true)}
      />
    </AddTodoContainer>
  );
};
