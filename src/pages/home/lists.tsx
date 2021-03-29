import { useAppSelector } from "hooks";
import styled from "styled-components";
import { List } from "./todoList";

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100vw;
`;

export const Lists: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <Container>
      <List list={todos.filter((_i) => !_i.isSoftDelete)} title="All" />
      <List
        list={todos.filter((_i) => !_i.isSoftDelete && !_i.isCompleted)}
        title="Todo"
      />
      <List
        list={todos.filter((_i) => !_i.isSoftDelete && _i.isCompleted)}
        title="Completed"
        forceAddCompleted
      />
    </Container>
  );
};
