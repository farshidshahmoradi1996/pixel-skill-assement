import { Label, Todo, TodoList, UndoToastInner } from "components";
import { useAppDispatch } from "hooks";
import {
  addTodo,
  editTodo,
  softDeleteTodo,
  hardDeleteTodo,
  restoreTodo,
} from "store";
import { ITodo } from "types";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

interface Props {
  list: ITodo[];
  title: string;
  forceAddCompleted?: boolean;
}

export const List: React.FC<Props> = ({
  list,
  title = "",
  forceAddCompleted = false,
}) => {
  const dispatch = useAppDispatch();

  const addNewTodo = (name: string) => {
    const item: ITodo = {
      id: uuid(),
      name,
      isCompleted: forceAddCompleted,
      isSoftDelete: false,
    };
    dispatch(addTodo(item));
  };

  const softDeleteTask = (_taks: ITodo) => {
    dispatch(softDeleteTodo(_taks?.id));
    toast.error(
      <UndoToastInner
        title={`  ${_taks?.name} was Deleted.`}
        onUndo={() => dispatch(restoreTodo(_taks?.id))}
      />,
      {
        onClose: () => {
          dispatch(hardDeleteTodo(_taks?.id));
        },
      },
    );
  };

  return (
    <TodoList title={title} onAdd={addNewTodo}>
      {list?.map((_item) => (
        <Todo
          data={_item}
          key={_item?.id}
          onEdit={(_editedItem) => dispatch(editTodo(_editedItem))}
          onDeleteClick={() => softDeleteTask(_item)}
        />
      ))}
      {list?.length === 0 && (
        <Label size="xs" style={{ textAlign: "center" }}>
          No Task Found ,
        </Label>
      )}
    </TodoList>
  );
};
