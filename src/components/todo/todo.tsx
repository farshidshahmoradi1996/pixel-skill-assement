import { Button } from "components/button/button";
import { CheckBox } from "components/checkbox/checkbox";
import { Label } from "components/label/label";
import { TodoProps } from "./todo.props";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TodoBody, TodoContainer, TodoActions } from "./todo.styled";
import { useState } from "react";
import { TodoEditor } from "components/todoEditor/todoEditor";
export const Todo: React.FC<TodoProps> = ({
  data,
  onEdit = () => {},
  onDeleteClick,
  ...rest
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <TodoContainer {...rest}>
      <TodoBody>
        {isEditMode ? (
          <TodoEditor
            name={data?.name}
            onChange={(name) => {
              onEdit({ ...data, name });
              setIsEditMode(false);
            }}
          />
        ) : (
          <>
            <Label withLine={data?.isCompleted} size="sm">
              {data?.name}
            </Label>
            <CheckBox
              value={Boolean(data?.isCompleted)}
              onChange={(isCompleted) => onEdit({ ...data, isCompleted })}
            />
          </>
        )}
      </TodoBody>
      <TodoActions>
        <Button preset="icon" onClick={() => setIsEditMode(true)}>
          <MdModeEdit />
        </Button>
        <Button preset="icon" onClick={onDeleteClick}>
          <RiDeleteBin5Line />
        </Button>
      </TodoActions>
    </TodoContainer>
  );
};
