import { UndoToastInner } from "./undoToastInner";
import { UndoToastInnerProps } from "./undoToastInner.props";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Story/UndoToastInner",
  component: UndoToastInner,
} as Meta;
const Template: Story<UndoToastInnerProps> = (args) => (
  <UndoToastInner {...args} />
);

export const Base = Template.bind({});

Base.args = {};
