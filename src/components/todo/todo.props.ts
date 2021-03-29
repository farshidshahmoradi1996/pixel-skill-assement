import { ITodo } from "types";

export interface TodoProps {
  data: ITodo;
  onEdit?(newDate: ITodo): void;
  onDeleteClick?(): void;
}
