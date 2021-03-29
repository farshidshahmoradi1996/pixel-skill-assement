import { CheckBox } from "./checkbox";
import { CheckBoxProps } from "./checkbox.props";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Story/Check Box",
  component: CheckBox,
} as Meta;
const Template: Story<CheckBoxProps> = (args) => (
  <CheckBox {...args}>This is Simple Label</CheckBox>
);

export const DefaultCheckBox = Template.bind({});

DefaultCheckBox.args = {};
