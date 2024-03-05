import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    background: { control: 'color' },
    Disable: { control: 'boolean' },
  },
}  

const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    background: "lightgrey",
    Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
    background: "lightgrey",
    Disable: true, 
};
