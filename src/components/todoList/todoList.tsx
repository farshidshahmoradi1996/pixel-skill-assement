import { AddTodo } from "components/addTodo/addTodo";
import { Label } from "components/label/label";
import { TodoListProps } from "./todoList.props";

import {
  StyledTodoList,
  TodoListHeader,
  TodoListBody,
  TodoListFooter,
} from "./todoList.styled";

export const TodoList: React.FC<TodoListProps> = ({
  title,
  onAdd,
  children,
  ...rest
}) => {
  return (
    <StyledTodoList {...rest}>
      <TodoListHeader>
        <Label size="md">{title}</Label>
      </TodoListHeader>
      <TodoListBody>{children}</TodoListBody>
      <TodoListFooter>
        <AddTodo onAdd={onAdd} />
      </TodoListFooter>
    </StyledTodoList>
  );
};
