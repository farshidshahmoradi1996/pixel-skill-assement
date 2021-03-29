import { TodoEditor } from "./todoEditor";
import { TodoEditorProps } from "./todoEditor.props";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Story/TodoEditor",
  component: TodoEditor,
} as Meta;
const Template: Story<TodoEditorProps> = (args) => <TodoEditor {...args} />;

export const PrimaryTodoEditor = Template.bind({});

PrimaryTodoEditor.args = {};
