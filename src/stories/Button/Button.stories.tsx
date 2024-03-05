import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    borderColor: { control: 'color' },
    Disable: { control: 'boolean' },
  },
}

const Template = (args) => <Button {...args} />;

export const Explore = Template.bind({});
Explore.args = {
  label: "Explore Projects",
  backgroundColor: "black",
  fontColor: "white",
  borderColor: "black",
  Disable: false,
};


export const Disable = Template.bind({});
Disable.args = {
  label: "Unexploreable Button",
  backgroundColor: "lightgrey",
  fontColor: "black",
  borderColor: "lightgrey",
  Disable: true,
};