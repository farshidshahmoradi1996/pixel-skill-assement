import { Todo } from "./todo";
import { TodoProps } from "./todo.props";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Story/Todo",
  component: Todo,
} as Meta;
const Template: Story<TodoProps> = () => (
  <Todo
    data={{
      name: "Im  Task",
      id: "id",
      isCompleted: false,
      isSoftDelete: false,
    }}
    onDeleteClick={() => alert("on delete")}
  />
);

export const Primary = Template.bind({});

Primary.args = {};
