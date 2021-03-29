import { AddTodo } from "./addTodo";
import { TodoAddProps } from "./addTodo.props";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Story/AddTodo",
  component: AddTodo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;
const Template: Story<TodoAddProps> = (args) => (
  <AddTodo
    {...args}
    onAdd={(name) => {
      alert(`${name} added`);
    }}
  />
);

export const PrimaryAddTodo = Template.bind({});

PrimaryAddTodo.args = {};
