export interface ITodo {
  id: string;
  name: string;
  isCompleted: boolean;
  isSoftDelete?: boolean;
}
export interface TodosState {
  todos: ITodo[];
}
