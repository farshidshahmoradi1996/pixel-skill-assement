import styled from "styled-components";

export const StyledTodoList = styled.div`
  min-width: 250px;
  box-shadow: 0 0 20px #dddddd;
  margin: 10px;
  border-radius: 10px;
  outline: none !important;
  background: white;
  min-height: 400px;
  overflow: hidden;
`;
export const TodoListHeader = styled.div`
  width: "100%";
  background: #dddddd;
  padding: 5px 8px;
`;
export const TodoListBody = styled.div`
  height: 300px;
  overflow-y: auto;
  padding: 10px;
`;
export const TodoListFooter = styled.div`
  height: 50px;
  padding: 10px;
  background: #dddddd;
`;
