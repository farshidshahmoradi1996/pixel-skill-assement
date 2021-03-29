import React from "react";

export interface TodoListProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  onAdd(todoName): void;
}
