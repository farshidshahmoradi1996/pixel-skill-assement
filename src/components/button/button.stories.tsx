import { Button } from "./button";
import { ButtonProps } from "./button.props";
import { Story, Meta } from "@storybook/react";
import { AiFillHome } from "react-icons/ai";
export default {
  title: "Story/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;
const Template: Story<ButtonProps> = (args) => (
  <Button {...args} onClick={() => alert("Button Clicked!")}>
    {args.children}
  </Button>
);

export const Simple = Template.bind({});

Simple.args = {
  preset: "simple",
  children: "Click Me !",
};
export const Link = Template.bind({});

Link.args = {
  preset: "link",
  children: "Click Me !",
};
export const Icon = Template.bind({});

Icon.args = {
  preset: "link",
  children: <AiFillHome />,
};
