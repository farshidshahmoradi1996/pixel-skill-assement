import { TodoList } from "./todoList";
import { TodoListProps } from "./todoList.props";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Story/TodoList",
  component: TodoList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;
const Template: Story<TodoListProps> = (args) => <TodoList {...args} />;

export const Small = Template.bind({});

Small.args = {};
