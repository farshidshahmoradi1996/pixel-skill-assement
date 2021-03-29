import { TextInput } from "./textInput";
import { TextInputProps } from "./textInput.props";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Story/TextInput",
  component: TextInput,
} as Meta;
const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const PrimaryTextBox = Template.bind({});

PrimaryTextBox.args = {};
