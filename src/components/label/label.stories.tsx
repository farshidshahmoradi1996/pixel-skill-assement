import { Label } from "./label";
import { LabelProps } from "./label.props";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Story/Label",
  component: Label,
} as Meta;
const Template: Story<LabelProps> = (args) => (
  <Label {...args}>This is Simple Label</Label>
);

export const PrimaryLabel = Template.bind({});

PrimaryLabel.args = {
  size: "sm",
};
